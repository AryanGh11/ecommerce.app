import { useUserStore } from "../store";

export function useUser() {
  const user = useUserStore();

  const checkIfAnyOfKeysAreNull = Object.values(user)
    .map((u) => u === null)
    .find((v) => v === true);

  if (checkIfAnyOfKeysAreNull) {
    return null;
  }

  return user;
}
