import React from "react";
import { Form,Card,Input,Button,message } from "antd";

function Edit(props) {
    const handleSubmit = e =>{
        console.log(e);
        e.preventDefault();
        props.form.validataFieldsAndScroll((err,values)=>{
            console.log(values);
            console.log("提交");
            //此处要调用API接口了
        });
        
    };
    return (
        <Card title="视频编辑">
            <Form onSubmit={e=>handleSubmit(e)}>
                <Form.Item label="名字">
                    <Input placeholder="请输入用户名字" />
                    </Form.Item>
            <Form.Item>
                <Button htmlType="submit" type="primary">保存</Button>
            </Form.Item>
            </Form>
        </Card>
    )
}

export default Edit;
