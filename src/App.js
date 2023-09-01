import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const FormDisabledDemo = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);
  return (
    <>
     
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
      
        <Form.Item label="Nombre">
          <Input />
        </Form.Item>
        <Form.Item label="Apellido">
          <Input />
        </Form.Item>
        <Form.Item label="Idioma">
          <Select>
            <Select.Option value="demo">Ingles</Select.Option>
            <Select.Option value="demo">Frances</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Meses: ">
          <InputNumber />
        </Form.Item>
      
    
  
        <Form.Item >
          <Button>Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;