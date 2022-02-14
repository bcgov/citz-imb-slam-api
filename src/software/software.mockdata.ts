export const mockdata = () => {
  return {
    columns: [
      {
        field: 'id',
        headerName: 'id',
        hide: true,
        type: 'number',
      },
      {
        field: 'Name',
        headerName: 'Name',
        type: 'string',
        width: 100,
      },
      {
        field: 'RenewalDate',
        headerName: 'Renewal Date',
        type: 'date',
        width: 150,
      },
      {
        field: 'Cost',
        headerName: 'Cost',
        type: 'number',
        width: 100,
      },
      {
        field: 'BillingCycle',
        headerName: 'Billing Cycle',
        type: 'string',
        width: 150,
      },
      {
        field: 'Administrator',
        headerName: 'Administrator',
        type: 'string',
        width: 150,
      },
      {
        field: 'Quantity',
        headerName: 'Quantity',
        type: 'number',
        width: 100,
      },
      {
        field: 'Status',
        headerName: 'Status',
        type: 'string',
        width: 100,
      },
    ],
    rows: [
      {
        id: 1,
        Name: 'Visio',
        RenewalDate: '12/29/2023',
        Cost: 1000,
        BillingCycle: 'Annually',
        Administrator: 'Ben Carson',
        Quantity: 30,
        Status: 'Active',
      },
      {
        id: 2,
        Name: 'Jira',
        RenewalDate: '6/3/2025',
        Cost: 10,
        BillingCycle: 'Monthly',
        Administrator: 'Anita Break',
        Quantity: 250,
        Status: 'Active',
      },
      {
        id: 3,
        Name: 'Notepad++',
        RenewalDate: '',
        Cost: 500,
        BillingCycle: 'One-Time',
        Administrator: 'Anita Break',
        Quantity: 30,
        Status: 'Active',
      },
    ],
  };
};

export default mockdata;
