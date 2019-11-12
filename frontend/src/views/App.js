import React from "react";
// import { graphql, QueryRenderer } from "react-relay";

// import environment from "/src/environment";

//components
import { Layout, Menu } from "antd";
const { Header, Content } = Layout;
import {
  Switch,
  Route,
  BrowserRouter as Router,
  withRouter
} from "react-router-dom";

//components
import AppBreadcrumb from "/src/components/AppBreadcrumb";

// pages
import ProductList from "/src/views/product/ProductList";
import ProductDetail from "/src/views/product/ProductDetail";

function App() {
  //states

  const Home = withRouter(props => {
    const { location } = props;

    return (
      <Content className="main-layout">
        <Header>
          <div className="logo">Mock Data</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          ></Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
            <AppBreadcrumb location={location} />
            <Switch>
              <Route path="/" exact component={ProductList} />
              <Route
                path="/product/detail/:productId"
                exact
                component={ProductDetail}
              />
            </Switch>
          </div>
        </Content>
      </Content>
    );
  });

  return (
    <Router>
      <Home />
    </Router>
  );
}

// eslint-disable-next-line react/display-name
// export default () => {
//   return (
//     <QueryRenderer
//       environment={environment}
//       query={graphql`
//         query AppQuery {
//           viewer {
//             id
//           }
//         }
//       `}
//       variables={{}}
//       render={({ error, props }) => {
//         if (error) {
//           return <div>Error!</div>;
//         }
//         if (!props) {
//           return <div>Loading...</div>;
//         }
//         return <App {...props} />;
//       }}
//     />
//   );
// };

export default App;
