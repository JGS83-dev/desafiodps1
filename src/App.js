import { PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { descuentos } from "./utils/descuentos";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Col,
  Divider,
  Row,
  Space,
} from "antd";

const MainComponent = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cursoSeleccionado, setCursoSeleccionado] = useState("");
  const [meses, setMeses] = useState(0);
  const [precioFinal, setPrecioFinal] = useState(0);
  const [descuentoAplicado, setDescuentoAplicado] = useState(0);

  const selectIdiomasDisponibles = ["ingles", "frances"];

  const CalcularDescuento = (mes) => {
    console.log("Valor enviado:", mes);
    descuentos.forEach((e) => {
      // console.log("Limite superior", e.inferior);
      // console.log("Limite inferior", e.inferior);
      if (mes >= e.inferior && mes <= e.superior) {
        if (e.descuento > 0) {
          setDescuentoAplicado(e.descuento);
          setPrecioFinal(25 + 25 * (e.descuento / 100));
        } else {
          setDescuentoAplicado(0);
          setPrecioFinal(25);
        }
        console.log("Precio con descuento", precioFinal);
      }
    });

    //Debug info del usuario
    console.log('Nombre:',nombre)
    console.log('Apellido:',apellido)
  };

  return (
    <>
      <Form
        labelCol={{
          span: 12,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="horizontal"
        style={{
          maxWidth: 900,
        }}
      >
        <Form.Item label="Nombre" required>
          <Input onChange={(e) => setNombre(e.target.value)}/>
        </Form.Item>

        <Form.Item label="Apellido" required>
          <Input onChange={(e) => setApellido(e.target.value)}/>
        </Form.Item>
        <Form.Item label="Idioma" required>
          <Select>
            {selectIdiomasDisponibles.forEach((element) => {
              <Select.Option value={element}>{element}</Select.Option>;
            })}
          </Select>
        </Form.Item>

        <Form.Item label="Meses: " required>
          <InputNumber onChange={(e) => setMeses(e)} />
        </Form.Item>

        <Form.Item label=" ">
          <Button onClick={() => CalcularDescuento(meses)}>Calcular</Button>
        </Form.Item>
        <Form.Item label="Detalles:">
          <Input placeholder="Descuento" disabled />
          <Input placeholder="Total a pagar" disabled />
        </Form.Item>
      </Form>
    </>
  );
};
export default () => <MainComponent />;
