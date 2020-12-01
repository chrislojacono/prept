import React from 'react';
import QuestionForm from '../../components/Form';
import Loader from '../../components/Loader';
import Auth from '../../components/Auth';

export default function Home(props) {
  const loadComponent = () => {
    let component = '';
    if (props.user === null) {
      component = <Loader />;
    } else if (props.user) {
      component = <QuestionForm />;
    } else {
      component = <Auth />;
    }
    return component;
  };
  return (
    <>
    {loadComponent()}
    </>
  );
}
