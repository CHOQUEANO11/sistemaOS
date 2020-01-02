import React from 'react';
import {FormGroup, Label, Form, Input, Button, Container, Row, Col} from 'reactstrap';

const Breadcrumbs = (props) =>  {

const voltar = () => {
  window.location.href = "/#/dashboard"
}

    return(
      <Container style={{borderWidth: 2, borderColor: 'red'}}>
      <Form>
        <h4 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>Histórico de Soicitações</h4>
        <Button onClick={voltar} style={{right: 150, position: "absolute"}} color="link">Voltar</Button>
      <FormGroup style={{marginTop: 40}}>
        <Label for="exampleSelect">Buscar Por:</Label>
        <Row>
        <Col xs="4">
        <Input type="select" name="select" id="exampleSelect">
          <option>Unidade</option>
          <option>Período</option>
        </Input>
        </Col>
        <Col xs="4">
          <Input  />
        </Col>
        <Col xs="4">
          <Button block color="primary">Pesquisar</Button>
        </Col>
      </Row>
      </FormGroup>
      </Form>
      </Container>
    )
}


      /*<div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Breadcrumbs</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/breadcrumbs/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <Breadcrumb>
                  <BreadcrumbItem active>Home</BreadcrumbItem>
                </Breadcrumb>
                <Breadcrumb>
                  {/*eslint-disable-next-line*
                  <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                  <BreadcrumbItem active>Library</BreadcrumbItem>
                </Breadcrumb>
                <Breadcrumb>
                  {/*eslint-disable-next-line*
                  <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                  {/* eslint-disable-next-line*
                  <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                  <BreadcrumbItem active>Data</BreadcrumbItem>
                </Breadcrumb>
                <Breadcrumb tag="nav">
                  <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">Library</BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">Data</BreadcrumbItem>
                  <BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
                </Breadcrumb>
              </CardBody>
            </Card>
          </Col>
        </Row>
    </div>*/

export default Breadcrumbs;
