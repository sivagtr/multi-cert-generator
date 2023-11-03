import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import React from 'react';
import {
    Button,
    Input,
    Form,
    Space,
    Upload,
} from 'antd';
const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};
const fileProps = {
    name: "file",
    multiple: false,
    beforeUpload: () => {
        return false;
    },
    onChange(info) {
        if (info.file.status !== "uploading") {
            let reader = new FileReader();
            console.log(reader.readAsDataURL(info.file))
            // setUploadedImage(info.file);
        }
    }
};
const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
const onFinish = (values) => {
    console.log('Received values of form: ', values);
};
const CertForm = () => (
    <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{

        }}
        style={{
            maxWidth: 600,
        }}
    >

        <Form.Item
            name="svg-upload"
            label="SVG (Certificate):"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="Select Certificate for Generation of Details"
        >
            <Upload name="logo" listType="picture" {...fileProps}>
                <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
        </Form.Item>

        <Form.Item
            name="json-upload"
            label="Mapper:"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="Select Mapper to Map details of SVG and Input Data"
        >
            <Upload name="logo" listType="picture" {...fileProps}>
                <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
        </Form.Item>

        <Form.Item
            name="data-upload"
            label="Data :"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="Select CSV data with Headers"
        >
            <Upload name="logo" listType="picture" {...fileProps}>
                <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
        </Form.Item>

        <Form.Item
            name="output-folder"
            label="Output Folder :"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="Full path of output folder"
        >
            <Input placeholder='Output Folder Path' />
        </Form.Item>


        <Form.Item
            wrapperCol={{
                span: 12,
                offset: 6,
            }}
        >
            <Space>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button htmlType="reset">Reset</Button>
            </Space>
        </Form.Item>
    </Form>
);
export default CertForm;