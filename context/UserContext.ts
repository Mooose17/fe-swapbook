import { createContext } from "react";
interface AppBookShelf {
  ISBN: string;
  book_cover: string;
  title: string;
}
interface AppUserContext {
  avatar_url: string;
  bookshelf: AppBookShelf[];
  email: string;
  name: string;
}
interface ContextProps {
  currentUser: AppUserContext | null;
  setCurrentUser: (UserContext: AppUserContext) => void;
}

export const UserContext = createContext<ContextProps>({
  currentUser: null,
  setCurrentUser: () => null,
});
