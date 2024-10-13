import { List } from "antd";
import { IPost } from "../@types/types";
import { FC } from "react";

interface PostsProps{
  data: IPost[]
}

const Posts: FC<PostsProps> = ({data}) => {
  return (
    <List
    size="default"
    header={<div>Header</div>}
    footer={<div>Footer</div>}
    bordered
    dataSource={data}
    renderItem={(item) => <List.Item>{item.id}. {item.title}</List.Item>}
  />
  )
};

export default Posts;
