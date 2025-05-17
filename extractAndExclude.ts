// geralmente usamos o Extract e Exclude em tipos literais

import { User } from "./utilityModels";

// Extract<Type, Union> Extrair tipos de uma união de tipos
type AppEvents = "click" | "hover" | "scroll" | "resize";

type MarketingEvents = Extract<
  AppEvents,
  "click" | "scroll" | { name: string } | User
>;

const event: MarketingEvents = "click";

// Exclude<UnionType, ExcludedMembers>
type UserRoles = "admin" | "editor" | "viewer" | "guest";

type ViewCommentsRoles = Exclude<UserRoles, "guest">;
