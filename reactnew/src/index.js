import React, { Component } from 'react';
import { render } from 'react-dom';


import 'semantic-ui-css/semantic.min.css'

import { Form, Modal, Button } from 'semantic-ui-react'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      modalOpened: false
    };
  }
  openModal = () => {
    alert('Running')
    this.setState(prevState => ({...prevState, modalOpened: true}) )
  }

  onModalCancel = () => {
    this.setState(prevState => ({...prevState, modalOpened: false}) )
  }
  render() {
    return (
      <div>

        <Button onClick={this.openModal}>Open</Button>

        <Modal open={this.state.modalOpened}>

        <Modal.Header>Hello</Modal.Header>
        <Modal.Content scrolling>
        <Form>
        
          <Form.Input label='AllState NTId' readOnly value={'12345678'} />
          <Form.Input label='Password' readOnly value={'XuV!23!@'} />
          
          <select>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option selected value="coconut">Coconut</option>
              <option value="mango">Mango</option>
          </select>
        
        </Form>

        </Modal.Content>
        <Modal.Actions>
    

        </Modal.Actions>
        

        


        </Modal>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
