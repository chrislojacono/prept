import axios from 'axios';
import ApiKeys from '../apiKeys';

const baseUrl = ApiKeys.databaseURL;

const getQuestions = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/questions.json`)
    .then((response) => {
      const questions = response.data;
      const questionsArray = [];
      if (questions) {
        Object.keys(questions).forEach((item) => {
          questionsArray.push(questions[item]);
        });
      }
      resolve(questionsArray);
    })
    .catch((error) => reject(error));
});

const addQuestion = (object) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/questions.json`, object)
    .then((response) => {
      axios.patch(`${baseUrl}/questions/${response.data.name}.json`, { firebaseKey: response.data.name }).then(resolve);
    }).catch((error) => reject(error));
});

const updateQuestion = (object) => new Promise((resolve, reject) => {
  axios.patch(`${baseUrl}/questions/${object.firebaseKey}.json`, object)
    .then(resolve).catch((error) => reject(error));
});

const deleteQuestion = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${baseUrl}/questions/${firebaseKey}.json`)
    .then(resolve).catch((error) => reject(error));
});

export {
  getQuestions,
  addQuestion,
  updateQuestion,
  deleteQuestion,
};
