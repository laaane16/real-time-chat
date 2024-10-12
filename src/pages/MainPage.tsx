import { Layout, Menu } from "antd";
import { selectName } from "../redux/slices/auth/selectors";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

const {Header, Content, Footer} = Layout

const MainPage = () => {
  const {logout} = useAppDispatch()
  const name = useSelector(selectName)

  return <Layout style={{minHeight: '100vh'}}>
    <Header>
    <Menu
          selectable = {false}
          theme="dark"
          mode="horizontal"
          items={[{key: 0, label: name}, {key: 1, label: 'Выйти', onClick: logout}]}
        />
    </Header>
    <Content></Content>
    <Footer style={{backgroundColor: '#d8d8d8'}}></Footer>
  </Layout>;
};

export default MainPage;