import React, { useEffect } from 'react';

// eslint-disable-next-line max-len
const Cell: React.FC<{children: React.ReactNode; className?: string }> = ({ children, className }) => <div className={border-1 border-red-800 ${className ?? ''}}>{children}</div>;

const Grid: React.FC = () => {
  const { resources } = useStores();

  useEffect(() => {
    resources.fetch();
  }, []);

  useEffect(() => {
    console.log('asdfasdf', resources.viewModel, resources.viewModel?.[0]?.spans);
  }, [resources.viewModel.length]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data = {
    resourceId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    resourceType: 'Employee',
    resourceName: 'string',
    deletedOn: '2023-01-30T12:27:25.023Z',
    resourceInProjects: [
      {
        projectId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        projectName: 'string',
        resourceInProjectId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        loadResourceInProjects: [
          {
            startDate: '2023-01-30T12:27:25.023Z',
            finishDate: '2023-01-30T12:27:25.023Z',
            workingHoursPerDay: 0,
          },
        ],
      },
      {
        projectId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        projectName: 'string',
        resourceInProjectId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        loadResourceInProjects: [
          {
            startDate: '2023-01-30T12:27:25.023Z',
            finishDate: '2023-01-30T12:27:25.023Z',
            workingHoursPerDay: 0,
          },
        ],
      }, {
        projectId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        projectName: 'string',
        resourceInProjectId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        loadResourceInProjects: [
          {
            startDate: '2023-01-30T12:27:25.023Z',
            finishDate: '2023-01-30T12:27:25.023Z',
            workingHoursPerDay: 0,
          },
        ],
      },
    ],
    unavailableResources: [
      {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        startDate: '2023-01-30T12:27:25.023Z',
        finishDate: '2023-01-30T12:27:25.023Z',
        reasonId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        reasonName: 'string',
      },
    ],
    catalogValues: [
      '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    ],
  };

  console.log('asdfasdf', resources.viewModel, resources.viewModel?.[0]?.spans);

  return (
    <div className="grid grid-flow-row grid-cols-3 h-min">

      {/* <Cell className="">data.name</Cell> */}
      <Cell className="row-span-3 bg-red-400">1.1</Cell>
      <Cell className="row-span-1 bg-red-400">1.1.1</Cell>
      <Cell className="row-span-1 bg-red-400">1.1.2</Cell>
      <Cell className="row-span-1 bg-red-400">1.1.3</Cell>
      <Cell className="row-span-2 bg-red-400">1.2</Cell>
      <Cell className="row-span-1 bg-red-400">1.2.1</Cell>
      <Cell className="row-span-1 bg-red-400">1.2.2</Cell>

    </div>
  );
};

export default Grid;