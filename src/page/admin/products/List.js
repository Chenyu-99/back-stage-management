import React from "react";
import { Card,Table, Button, Popconfirm } from 'antd'

const dataSource =[{
    id: 1,
    name: '用户A',
    number: '59'
}]
function List(props) {
    const columns = [{
        title: "序号",
        key: "id",
        width: 80,
        align: "center",
        render: (txt,record,index) => index + 1
    },{
        title:'名字',
        dataIndex:'name'
    },{
        title:'评论数',
        dataIndex: 'number'
    },{
        title: '操作',
        render: (txt,record,index)=>{
            return (
                <div>
                    <Button type="primary" size="small">
                        修改
                        </Button>
                        <Popconfirm 
                        title="确定删除此项？"
                        onCancel={()=>console.log("用户取消删除")}
                        onConfirm={()=>{
                            console.log("用户确认删除");
                            //调用API接口进行相关操作
                        }}
                        >
                    <Button style={{ margin:'0 1rem'}} type="danger" size="small">
                        删除
                        </Button>
                        </Popconfirm>
                </div>
            )
        }
    }];
    return (
        <Card 
        title="视频列表" 
        extra={
        <Button 
        type="promary" 
        size="small" 
        onClick={()=>props.history.push("/admin/products/edit/2")}
        >
            新增
        </Button>
        }
        >
            <Table rowKey="id" columns={columns} bordered dataSource={dataSource}/>
        </Card>
    );
}

export default List;
