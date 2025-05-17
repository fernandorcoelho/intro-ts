import { User } from "./utilityModels";

// Pick<Type, Keys> and Omit<Type, Keys>
// Pegar<Tipo, Chaves> e Omitir<Tipo, Chaves>

// type UserPreviewKeys = "firstName" | "lastName" | "profileImageUrl";
// Listagem de usuários (em cards, por exemplo)
type UserPreview = Pick<User, "firstName" | "lastName" | "profileImageUrl">;

const user: UserPreview = {
  firstName: "John",
  lastName: "Doe",
  profileImageUrl: "https://example.com/johndoe.jpg",
};

// Omit<Type, Keys>
// Form para cadastro de usuários ou para atualizar dados de perfil
type UserForm = Omit<User, "id" | "isOnline">;

const userForm: UserForm = {
  email: "lucas@coffstack.com",
  firstName: "Lucas",
  lastName: "Coff",
  phoneNumber: "123456789",
  profileImageUrl: "https://example.com/lucas.jpg",
};
