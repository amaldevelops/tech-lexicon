// If you provide an object that doesn’t match the interface you have provided, TypeScript will warn you:

interface User {
  name: string;
  id: number;
}

const user: User = {
  username: "Hayes",
  id: 0,
};
