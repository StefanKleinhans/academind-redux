import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { authActions } from './store/index'

function App() {

  const dispatch = useDispatch();
  const showUser = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      <Auth />
      {showUser && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
