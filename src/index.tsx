import React from 'react';
import './index.css';
import {rerenderAllTree} from "./render";
import state from "./redux/state";

rerenderAllTree(state);
