import './App.css';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import {
  Switch,
  Route
} from "react-router-dom";
import Products from './Products';
import Users from './Users';
import CreateUser from './CreateUser';
import Editusers from './EditUser';
import { UserProvider } from './UsersContext';
import { ProductProvider } from './ProductsContext';
import CreateProducts from './CreateProducts';
import Editproducts from './Editproducts';


function App() {
  return (

    <div className="App wrapper">
      <Sidebar />
      <div className="content-wrapper d-flex flex-column">
        <div className="content">
          <Topbar />
          <Switch>

            <Route path="/users" exact >
              <UserProvider>
                <Users />
              </UserProvider>
            </Route>

            <Route path="/products" exact >
              <ProductProvider>
                <Products />
              </ProductProvider>
            </Route>

            <Route path="/" component={Dashboard} exact />

            <Route path="/createuser" exact >
              <UserProvider>
                <CreateUser />
              </UserProvider>
            </Route>

            <Route path="/createproducts" exact >
              <ProductProvider>
                <CreateProducts />
              </ProductProvider>
            </Route>

            <>
              <UserProvider>
                <Route path="/users/edit/:id" component={Editusers}>
                </Route>
              </UserProvider>

              <ProductProvider>
                <Route path="/products/edit/:id" component={Editproducts} >
                </Route>
              </ProductProvider>
            </>
          </Switch>
        </div>
      </div>
    </div >
  );
}

export default App;