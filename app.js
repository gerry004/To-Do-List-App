// controllers
import todoController from './js/controllers/todoController/todoController.js';

// models
import todoModel from './js/models/todoModel/todoModel';

// views
import todoView from './js/views/todoView/todoView';

const tdm = todoModel();
const tdv = todoView();
const tdc = todoController({todoModel: tdm}, {todoView: tdv});

// useless comment 

// why won't this work