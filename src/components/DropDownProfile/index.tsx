import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ProfileDropDown = () => {
  const [themeMenuOpened, setThemeMenuOpened] = useState(false);
  const themeMenu = useRef<HTMLDivElement>(null);
  const themeMenuButton = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!themeMenuOpened && document.activeElement instanceof HTMLElement) {
      document?.activeElement?.blur();
    } else if (
      themeMenuOpened &&
      !themeMenu?.current?.contains(document.activeElement)
    ) {
      setThemeMenuOpened(false);
    }
  }, [themeMenuOpened]);

  return (
    <div className="profile-button cursor-pointer">
      <div ref={themeMenu} className="dropdown dropdown-end">
        <div
          ref={themeMenuButton}
          tabIndex={0}
          role="button"
          className="m-1 flex items-center gap-2"
          onBlur={(e) => {
            setThemeMenuOpened(false);
          }}
          onClick={(e) => {
            if (themeMenuOpened) {
              setThemeMenuOpened(false);
            } else {
              setThemeMenuOpened(true);
            }
          }}
        >
          <div className="avatar ">
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ChevronDown size={16} />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDropDown;
