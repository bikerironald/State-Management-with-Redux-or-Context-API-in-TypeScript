# State-Management-with-Redux-or-Context-API-in-TypeScript

## 4. Using Redux in Components

```tsx
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { setUser } from "../store/slices/userSlice";

const UserProfile = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const updateUser = () => {
    dispatch(setUser({ name: "John Doe", email: "john@example.com" }));
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={updateUser}>Update User</button>
    </div>
  );
};

export default UserProfile;
```
