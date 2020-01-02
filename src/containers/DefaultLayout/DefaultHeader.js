import React, { Component, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/citel.png'
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};


const defaultProps = {};



class DefaultHeader extends Component {
state = {
  idpessoa: ''
}

  componentDidMount() {
    let dados = localStorage.getItem('userData');
    dados = JSON.parse(dados);
    console.log(dados.nome)
    this.setState({idpessoa: dados.idpessoa.toString()})
  }


  render() {
        let idpessoa = this.state.idpessoa.split('');
        idpessoa = idpessoa.join('/')
        console.log(idpessoa)
        const url = `https://sigpol.pm.pa.gov.br/upload/pessoa/${idpessoa}/foto.jpg`
        const dado =  JSON.parse(localStorage.getItem('userData'))


    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile  />
        <AppNavbarBrand
          full={{ src: logo, width: 50, height: 55, alt: 'CoreUI Logo' }}
          //minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <h4 style={{color: '#314162'}}>CITEL</h4>
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <h4 style={{color: '#314162'}}>SISTEMA DE ORDENS DE SERVIÇO</h4>
        {/*<Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users" className="nav-link">Users</Link>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="#" className="nav-link">Settings</NavLink>
          </NavItem>
        </Nav>*/}
        <Nav className="ml-auto" navbar>
          {/*<NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-list"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-location-pin"></i></NavLink>
          </NavItem>*/}
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={url} className="img-avatar" alt="admin@bootstrapmaster.com"/>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Seus Dados</strong></DropdownItem>
  <DropdownItem><i className="fa fa-bell-o"></i> NOME:<Badge color="info">{dado.Graduacao.graduacao}  {dado.nome_guerra}</Badge></DropdownItem>
        <DropdownItem><i className="fa fa-envelope-o"></i> UNIDADE:<Badge color="success">{dado.Unidade.sigla_unidade}</Badge></DropdownItem>
              {/*<DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
              <DropdownItem divider />
        <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>*/}
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> SAIR</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
