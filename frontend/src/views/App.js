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
  withRouter,
  Link
} from "react-router-dom";

//components
import AppBreadcrumb from "/src/components/AppBreadcrumb";

// pages
import ProjectList from "/src/views/project/ProjectList";
import ProjectDetail from "/src/views/project/ProjectDetail";

import MockDetail from "/src/views/mock/MockDetail";

function App() {
  //states

  const Home = withRouter(props => {
    const { location } = props;

    return (
      <Content className="main-layout">
        <Header>
          <Link className="logo" to="/">
            Mock Data
          </Link>
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
              <Route path="/" exact component={ProjectList} />
              <Route
                path="/project/detail/:projectId"
                exact
                component={ProjectDetail}
              />
              <Route path="/mock/detail/:mockId" exact component={MockDetail} />
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
