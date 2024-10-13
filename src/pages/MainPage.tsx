import { Layout, Menu } from "antd";
import { selectName } from "../redux/slices/auth/selectors";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/useAppDispatch";
// import { useGetPostsQuery } from "../services/PostService";
// import Loader from "../components/Loader";
// import Posts from "../components/Posts";

const { Header, Content, Footer } = Layout;

const MainPage = () => {
  const { logout } = useAppDispatch();
  const name = useSelector(selectName);

  const onHandleClick = () => {
    logout();
  };

  // const {data, error, isLoading} = useGetPostsQuery('')

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <Menu
          selectable={false}
          theme="dark"
          mode="horizontal"
          items={[
            { key: "0", label: name },
            { key: "1", label: "Выйти", onClick: onHandleClick },
          ]}
        />
      </Header>
      <Content>
        {/* {isLoading?<Loader/>: error ?<h3>Произошла ошибка </h3>: <Posts data = {data || []}/>} */}
      </Content>
      <Footer style={{ backgroundColor: "#d8d8d8" }}></Footer>
    </Layout>
  );
};

export default MainPage;
