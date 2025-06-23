import CreateUserForm from "../createUserForm/createUsers";
import PostsList from "../postList/PostList";
import UserList from "../userContacts/page";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Client-Side API Demo
        </h1>

        <div className="grid gap-8">
          <CreateUserForm />
          <UserList />
          <PostsList />
        </div>
      </div>
    </div>
  );
}
