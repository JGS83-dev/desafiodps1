import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { descuentos } from './utils/descuentos';
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
const MainComponent = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cursoSeleccionado, setCursoSeleccionado] = useState("");
  const [precioFinal, setPrecioFinal] = useState("");

  const selectIdiomasDisponibles = ["ingles", "frances"];

  const CalcularDescuento = () => {
    let meses = 1;
    descuentos.forEach((e) => {
      if (e.inferior <= meses && e.superior >= meses) {
        setPrecioFinal(25 + 25 * (e.descuento / 100));
        console.log(precioFinal);
      }
    });
  };



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
        <Form.Item >
        <Input placeholder='Descuento' disabled/>
        <Input placeholder='Total a pagar' disabled/>
        </Form.Item>
      </Form>
    </>
  );
};
export default () => <MainComponent />;