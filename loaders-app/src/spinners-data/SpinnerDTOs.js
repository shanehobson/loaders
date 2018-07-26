import Spinner1 from './components/Spinner1.js';
import {
  spinner1HTML,
  spinner1CSS,
  spinner1Javascript
} from './source/Spinner1Source.js';

import Spinner2 from './components/Spinner2.js';
import {
  spinner2HTML,
  spinner2CSS,
  spinner2Javascript
} from './source/Spinner2Source.js';


import Spinner3 from './components/Spinner3.js';
import {
  spinner3HTML,
  spinner3CSS,
  spinner3Javascript
} from './source/Spinner3Source.js';

import Spinner4 from './components/Spinner4.js';
import {
  spinner4HTML,
  spinner4CSS,
  spinner4Javascript
} from './source/Spinner4Source.js';

import Spinner5 from './components/Spinner5.js';
import {
  spinner5HTML,
  spinner5CSS,
  spinner5Javascript
} from './source/Spinner5Source.js';

import Spinner6 from './components/Spinner6.js';
import {
  spinner6HTML,
  spinner6CSS,
  spinner6Javascript
} from './source/Spinner6Source.js';

import Spinner7 from './components/Spinner7.js';
import {
  spinner7HTML,
  spinner7CSS,
  spinner7Javascript
} from './source/Spinner7Source.js';

import Spinner8 from './components/Spinner8.js';
import {
  spinner8HTML,
  spinner8CSS,
  spinner8Javascript
} from './source/Spinner8Source.js';

import Spinner9 from './components/Spinner9.js';
import {
  spinner9HTML,
  spinner9CSS,
  spinner9Javascript
} from './source/Spinner9Source.js';

import Spinner10 from './components/Spinner10.js';
import {
  spinner10HTML,
  spinner10CSS,
  spinner10Javascript
} from './source/Spinner10Source.js';

import Spinner11 from './components/Spinner11.js';
import {
  spinner11HTML,
  spinner11CSS,
  spinner11Javascript
} from './source/Spinner11Source.js';

import Spinner12 from './components/Spinner12.js';
import {
  spinner12HTML,
  spinner12CSS,
  spinner12Javascript
} from './source/Spinner12Source.js';

import Spinner13 from './components/Spinner13.js';
import {
  spinner13HTML,
  spinner13CSS,
  spinner13Javascript
} from './source/Spinner13Source.js';

import Spinner14 from './components/Spinner14.js';
import {
  spinner14HTML,
  spinner14CSS,
  spinner14Javascript
} from './source/Spinner14Source.js';

import Spinner15 from './components/Spinner15.js';
import {
  spinner15HTML,
  spinner15CSS,
  spinner15Javascript
} from './source/Spinner15Source.js';

import Spinner16 from './components/Spinner16.js';
import {
  spinner16HTML,
  spinner16CSS,
  spinner16Javascript
} from './source/Spinner16Source.js';

import Spinner17 from './components/Spinner17.js';
import {
  spinner17HTML,
  spinner17CSS,
  spinner17Javascript
} from './source/Spinner17Source.js';

import React from 'react';

const spinnerDtoArray = spinnerColor => {
  return [
    {
      id: 1, 
      spinnerComponent:  <Spinner1 spinnerColor={spinnerColor} />,
      html: spinner1HTML,
      css: spinner1CSS(spinnerColor),
      javascript: spinner1Javascript
    },
    
    {
      id: 2, 
      spinnerComponent:  <Spinner2 spinnerColor={spinnerColor} />,
      html: spinner2HTML,
      css: spinner1CSS(spinnerColor),
      javascript: spinner2Javascript
    }, 
   
    {
      id: 3, 
      spinnerComponent:  <Spinner3 spinnerColor={spinnerColor} />,
      html: spinner3HTML,
      css: spinner1CSS(spinnerColor),
      javascript: spinner3Javascript
    },
  
    {
      id: 4, 
      spinnerComponent:  <Spinner4 spinnerColor={spinnerColor} />,
      html: spinner4HTML,
      css: spinner1CSS(spinnerColor),
      javascript: spinner4Javascript
    },

    {
      id: 5, 
      spinnerComponent:  <Spinner5 spinnerColor={spinnerColor} />,
      html: spinner5HTML,
      css: spinner1CSS(spinnerColor),
      javascript: spinner5Javascript
    },

    {
      id: 6, 
      spinnerComponent:  <Spinner6 spinnerColor={spinnerColor} />,
      html: spinner6HTML,
      css: spinner1CSS(spinnerColor),
      javascript: spinner6Javascript
    },

    {
      id: 7, 
      spinnerComponent:  <Spinner7 spinnerColor={spinnerColor} />,
      html: spinner7HTML,
      css: spinner1CSS(spinnerColor),
      javascript: spinner7Javascript
    },

    {
      id: 8, 
      spinnerComponent:  <Spinner8 spinnerColor={spinnerColor} />,
      html: spinner8HTML,
      css: spinner1CSS(spinnerColor),
      javascript: spinner8Javascript
    },

    {
      id: 9, 
      spinnerComponent:  <Spinner9 spinnerColor={spinnerColor} />,
      html: spinner9HTML,
      css: spinner1CSS(spinnerColor),
      javascript: spinner9Javascript
    },
    
    {
      id: 10, 
      spinnerComponent:  <Spinner10 spinnerColor={spinnerColor} />,
      html: spinner10HTML,
      css: spinner1CSS(spinnerColor),
      javascript: spinner10Javascript
    }, 
    
    {
      id: 11, 
      spinnerComponent:  <Spinner11 spinnerColor={spinnerColor} />,
      html: spinner11HTML,
      css: spinner1CSS(spinnerColor),
      javascript: spinner11Javascript
    }, 
  
    {
      id: 12, 
      spinnerComponent:  <Spinner12 spinnerColor={spinnerColor} />,
      html: spinner12HTML,
      css: spinner1CSS(spinnerColor),
      javascript: spinner12Javascript
    }, 
    
    {
      id: 13, 
      spinnerComponent:  <Spinner13 spinnerColor={spinnerColor} />,
      html: spinner13HTML,
      css: spinner1CSS(spinnerColor),
      javascript: spinner13Javascript
    }, 
    
    {
      id: 14, 
      spinnerComponent:  <Spinner14 spinnerColor={spinnerColor} />,
      html: spinner14HTML,
      css: spinner1CSS(spinnerColor),
      javascript: spinner14Javascript
    }, 
  
    {
      id: 15, 
      spinnerComponent:  <Spinner15 spinnerColor={spinnerColor} />,
      html: spinner15HTML,
      css: spinner1CSS(spinnerColor),
      javascript: spinner15Javascript
    }, 
    
    {
      id: 16, 
      spinnerComponent:  <Spinner16 spinnerColor={spinnerColor} />,
      html: spinner16HTML,
      css: spinner1CSS(spinnerColor),
      javascript: spinner16Javascript
    }, 
    
    {
      id: 17, 
      spinnerComponent:  <Spinner17 spinnerColor={spinnerColor} />,
      html: spinner17HTML,
      css: spinner1CSS(spinnerColor),
      javascript: spinner17Javascript
    }
  ];
};


export default spinnerDtoArray;