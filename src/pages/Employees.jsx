import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Search, Page, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy_data';
import { Header } from '../components';

const Employees = () => {
  const toolbarOptions = ['Search'];
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        pageSettings={{pageCount: 5}}
        editSettings={editing}
        toolbar={toolbarOptions}
        width='auto'
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Sort, Search, Page, Toolbar]} />
      </GridComponent>
    </div>
  );
};
export default Employees;