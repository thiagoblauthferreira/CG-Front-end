import React from "react";
import { IObjectFilter, IOptionFilter, ISearch } from "./interface";
import { Input, Select } from "../common";
import { useForm } from "react-hook-form";

export function Search({ className, options, onFilter }: ISearch) {
  const { register, watch } = useForm<any>({});

  const filterRef = React.useRef<IObjectFilter>({});

  const handleFilter = async (event: any, key: string) => {
    register(key).onChange(event);
    filterRef.current[key] = watch(key);

    onFilter(filterRef.current);
  };

  const Option = ({ optionKey, type, options }: IOptionFilter) => {
    const organizedKey = optionKey.replace(/\s+/g, "_");
    const registered = register(organizedKey);

    switch (type) {
      case "input":
        return (
          <Input
            {...registered}
            onChange={(event) => {
              handleFilter(event, organizedKey);
            }}
          />
        );

      case "select":
        return (
          <Select
            {...registered}
            onChange={(event) => {
              handleFilter(event, organizedKey);
            }}
            options={options || []}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`
        grid gap-3 grid-cols-1 md:grid-cols-3
        ${className}
      `}
    >
      {options.map((option) => {
        return (
          <Option key={`search-filter-${option.optionKey}-${option.type}`} {...option} />
        );
      })}
    </div>
  );
}
