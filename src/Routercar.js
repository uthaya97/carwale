import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Index from './Component';
import Popularusedcar2 from './Navigate/Popularusedcar2';
import Topcar2 from './Navigate/Topcar2';
import Porsche from './Navigate/Porsche';
import Cellmycar from './Navigate/Cellmycar';
import Featurecar2 from './Navigate/Featurecar2';
import Allbranddetail from './Navigate/Allbranddetail';
import FeaturePopular from './Navigate/FeaturePopular';
import FeatureUpcoming from './Navigate/FeatureUpcoming';
import Compare2 from './Navigate/Compare2';
import Morecompare from './Navigate/Morecompare';
import Budjet from './Navigate/Budjet';

const Routercar = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/'element={<Index/>}></Route>
        <Route path='/popular/:id'element={<Popularusedcar2/>}></Route>
        <Route path='/topcar/:id'element={<Topcar2/>}></Route>
        <Route path='/porsche'element={<Porsche/>}></Route>
        <Route path='/sell-my-car'element={<Cellmycar/>}></Route>
        <Route path='/trending/:id/:name'element={<Featurecar2/>}></Route>
        <Route path='/popular/:id/:name'element={<FeaturePopular/>}></Route>
        <Route path='/upcoming/:id/:name'element={<FeatureUpcoming/>}></Route>
        <Route path='/brand/:id/:name'element={<Allbranddetail/>}></Route>
        <Route path='/comparecar/:id/:name1/:des1/:name2/:des2'element={<Compare2/>}></Route>
        <Route path='/compare-car'element={<Morecompare/>}></Route>
        <Route path='/new/:id/:name'element={<Budjet/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Routercar