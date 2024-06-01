import z from "zod";

export type ShelterFilterInterface = {
  nearby: string;
  typeCause: string;
  typeNeed: string;
};

export const ShelterFilterSchema = z.object({
  nearby: z.string().optional(),
  typeCause: z.string().optional(),
  typeNeed: z.string().optional(),
});
