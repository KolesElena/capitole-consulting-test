import { useState, useEffect } from "react";
import './App.scss';
import Dark from "./components/Dark/Dark";
import Modal from "./components/Modal/Modal";
import {RateContext} from './context/RateContext';
import Layout from "./components/Layout/Layout";

const initialCards = JSON.parse(localStorage.getItem('cards'));

const initialState = { 
  formControls: {
   title: {
     type: 'text',
     value: '',
     placeholder: 'Título'
   },
   description: {
     type: 'text',
     value: '',
     placeholder: 'Descripción'
   },
   url: {
     type: 'text',
     value: '',
     placeholder: 'Imágen (URL)'
   }
 },
 showModal: false,
 showButtons: false,
 isFormValid: false
};

const App = () => {
  const [cards, setCards] = useState(initialCards || []);
  const [state, setState] = useState(initialState);

  const addNewCard = (card) => {
    setCards([...cards, card]);
  };

  const modalShowHandler = () => {
    setState({ ...initialState, showModal: true });
  }

  const modalHideHandler= () => {
    setState(initialState);
  }

  const addNewCardHandler= () => {
    const newCard = {
      title: state.formControls.title.value,
      description: state.formControls.description.value,
      url: state.formControls.url.value,
    };
    
    if (!isNaN(state.index)) {
      const editedCards = cards.map((value, index) => {
        if (index === state.index) {
         return newCard;
        }
        return value;
      });
      setCards(editedCards);
    } else {
      addNewCard(newCard);
    }
    setState(initialState);
  }

  const showButtonsHandler = () => {
    setState({
      ...state,
      showButtons: true
    });
  }

  const editHandler = ({ title, description, url, index }) => {
    setState({
      ...state,
      showModal: true,
      index,
      formControls: {
        title: {
          ...state.formControls.title,
          value: title,
        },
        description: {
          ...state.formControls.description,
          value: description,
        },
        url: {
          ...state.formControls.url,
          value: url,
        }
      }
    });
  }

  const deleteHandler = (indexToDelete) => {
    const remaingingCards = cards.filter((value, index) => index !== indexToDelete);
    setCards(remaingingCards);
  }

  const onChangeHandler = (event, controlName) => {

   const values = {
    value: event.target.value
   }
  
    setState({...state, formControls: {
      ...state.formControls,
        [controlName]: {
          ...state.formControls[controlName],
          ...values
        }
      },
      isFormValid: (values.value!=='' || null) ? true : false });
  };

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  return (
    <RateContext.Provider value={{state, cards, addNewCardHandler, modalShowHandler, modalHideHandler, showButtonsHandler, editHandler, deleteHandler, onChangeHandler}}>
      <Dark showModal = {state.showModal}/>
      <Modal/>
      <Layout />
    </RateContext.Provider>
  );
}

export default App;
