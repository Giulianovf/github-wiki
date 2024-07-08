import React, { useState } from 'react';
import gitlogo from '../assets/githublogo.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from "./styles";

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        const isExist = repos.find(repo => repo.id === data.id);

        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
          return;
        }
        alert('Repositório já existe');
      } else {
        alert('Repositório não encontrado');
      }
    } catch (error) {
      alert('Erro ao buscar repositório');
    }
  };

  const handleRemoveRepo = (id) => {
    setRepos(repos.filter(repo => repo.id !== id));
  };

  return (
    <Container>
      <img src={gitlogo} alt='logo' width={72} height={72} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => (
        <ItemRepo key={repo.id} repo={repo} handleRemoveRepo={handleRemoveRepo} />
      ))}
    </Container>
  );
}

export default App;
