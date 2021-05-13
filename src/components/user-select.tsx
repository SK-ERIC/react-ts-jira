import React from "react";
import { useUsers } from "utils/user";
import { IdSelect } from "./id-select";

export const UserSelect = (props: React.ComponentProps<typeof IdSelect>) => {
  const { data: Users } = useUsers();
  return <IdSelect options={Users || []} {...props} />;
};
