import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import logo from '../../../assets/img/brand/citel.png'
//import logo1 from '../../../assets/img/brand/pmpa.png'

import sigpol from "../../services/sigpol";
import api from "../../services/api";
import md5 from 'md5'

const Login = (history) => {
  console.log("login");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [span, setSpan] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async e => {
    console.log("disparando")
    e.preventDefault();
    setIsLoading(true);
    const senha = await md5(password);
    const response = await sigpol
      .post('api/v1/auth/appidentidade', {
        cpf,
        senha
      })
      .then(res => {
        sigpol.defaults.headers.common['X-Token'] = `${res.data.payload.token}`
        console.log(res.data.payload.token)
        const dados = localStorage.setItem('userData', JSON.stringify(res.data.payload))
        const token = localStorage.setItem('token', res.data.payload.token)
        let obj = res.data.payload
        console.log(dados);
        console.log(token);
        localStorage.setItem('meuId', cpf)
        console.log(obj)
        window.location.href = "/#/dashboard"
      })
      .catch(err => {
        setSpan({span});
        setIsLoading({isLoading});
        console.log(err)
      });
      console.log(response)
    if (response === undefined) {
      setSpan({span});
      setIsLoading({isLoading});
    } else if (await (response.data.payload.token !== "")) {
      let unidade = await api.get(
        `/unidade/all?sigla=${response.data.payload.Unidade.sigla_unidade}`
      );
      if (unidade.data.payload.length > 0) {
        response.data.payload.Unidade = unidade.data.payload[0];
      }
      let data = await JSON.stringify(response.data.payload);
      let token = await response.data.payload.token;
      await localStorage.setItem("data", data);
      await localStorage.setItem("token", token);

      sigpol.defaults.headers.common["X-Token"] = await `${token}`;
      window.location.href = "/"
    }
  };

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src={logo} style={{width: 100, height: 120}} />
                </div>
                  <CardBody>
                    <Form onSubmit={handleSubmit}>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text"
                         placeholder="Cpf"
                         onChange={e => {
                           setCpf(e.target.value)
                         }}
                         //autoComplete="username"
                         />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password"
                        placeholder="Senha"
                        onChange={e => {
                          setPassword(e.target.value)
                        }}
                        //autoComplete="current-password"
                        />
                      </InputGroup>
                      <Row>
                        <Col style={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                        <Button type="submit" className="mb-3" color="primary" style={{width: 200}}>Login</Button>
                        </Col>
                        {/*<Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>*/}
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                {/*<Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>*/}
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };

export default Login;
