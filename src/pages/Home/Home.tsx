import React, { useState, useEffect } from 'react';
import { ImagesTable } from './components';
import { Image } from '@/models';

export interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {

  return <ImagesTable />;
};

export default Home;
