export const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];
  
  export const flavourOptions = [
    { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
    { value: 'chocolate', label: 'Chocolate', rating: 'good' },
    { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
    { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
  ];
  
  export const stateOptions = [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AS', label: 'American Samoa' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'DC', label: 'District Of Columbia' },
    { value: 'FM', label: 'Federated States Of Micronesia' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'GU', label: 'Guam' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MH', label: 'Marshall Islands' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'MP', label: 'Northern Mariana Islands' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PW', label: 'Palau' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'PR', label: 'Puerto Rico' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VI', label: 'Virgin Islands' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'WY', label: 'Wyoming' },
  ];
  
  export const optionLength = [
    { value: 1, label: 'general' },
    {
      value: 2,
      label:
        'Evil is the moment when I lack the strength to be true to the Good that compels me.',
    },
    {
      value: 3,
      label:
        "It is now an easy matter to spell out the ethic of a truth: 'Do all that you can to persevere in that which exceeds your perseverance. Persevere in the interruption. Seize in your being that which has seized and broken you.",
    },
  ];
  
  export const dogOptions = [
    { id: 1, label: 'Chihuahua' },
    { id: 2, label: 'Bulldog' },
    { id: 3, label: 'Dachshund' },
    { id: 4, label: 'Akita' },
  ];
  
  // let bigOptions = [];
  // for (let i = 0; i < 10000; i++) {
  // 	bigOptions = bigOptions.concat(colourOptions);
  // }
  
  export const groupedOptions = [
    {
      label: 'Colours',
      options: colourOptions,
    },
    {
      label: 'Flavours',
      options: flavourOptions,
    },
  ];

  export const University = [
    { value: 'NTU', label: 'NTU' },
    { value: 'NUS', label: 'NUS'},
    { value: 'SMU', label: 'SMU'},
    { value: 'SUTD', label: 'SUTD'},
  ];
  
  export const Major = [
    { value: 'DSAI', label: 'DSAI' },
    { value: 'CS', label: 'CS'},
    { value: 'CE', label: 'CE'},
    { value: 'Business', label: 'Business'},
  ];

  export const Minor = [
    { value: 'None', label: 'None' },
    { value: 'Language', label: 'Language'},
    { value: 'Biology', label: 'Biology'},
    { value: 'EEE', label: 'EEE'},
  ];

  export const UserDetails = [
    {id: 5, Name: 'WY', University: 'NTU', Major: 'DSAI', Minor: 'Biology', Pic: './Images/jobsupplyLogo.png', Skill: [
      {id: 1, name: 'Skill 1'},
      {id: 2, name: 'Skill 2'},
      {id: 6, name: 'Skill 6'},
      {id: 7, name: 'Skill 7'},
      {id: 5, name: 'Skill 5'},
    ]},
  ]


  export const Jobreq= [
    {id: 1, name: 'Skill 1'},
    {id: 2, name: 'Skill 2'},
    {id: 3, name: 'Skill 3'},
    {id: 4, name: 'Skill 4'},
    {id: 5, name: 'Skill 5'},
  ]


  export const PositionDetail= [
    {id: 1, Jobtitle: 'Jobtitle 1', Company: 'Company 1', Industry:"Industry 1", Skill: [
      {id: 1, name: 'Skill 1'},
      {id: 2, name: 'Skill 2'},
      {id: 3, name: 'Skill 3'},
      {id: 4, name: 'Skill 4'},
      {id: 5, name: 'Skill 5'},]},
    {id: 2, Jobtitle: 'Jobtitle 2', Company: 'Company 2', Industry:'Industry 2', Skill: [
      {id: 1, name: 'Skill 1'},
      {id: 2, name: 'Skill 2'},
      {id: 6, name: 'Skill 6'},
      {id: 4, name: 'Skill 4'},
      {id: 5, name: 'Skill 5'},]},
    {id: 3, Jobtitle: 'Jobtitle 3', Company: 'Company 3', Industry:'Industry 3', Skill: [
      {id: 1, name: 'Skill 1'},
      {id: 2, name: 'Skill 2'},
      {id: 3, name: 'Skill 3'},
      {id: 4, name: 'Skill 4'},
      {id: 9, name: 'Skill 9'},]},
      {id: 1, Jobtitle: 'Jobtitle 1', Company: 'Company 1', Industry:"Industry 1", Skill: [
        {id: 1, name: 'Skill 1'},
        {id: 2, name: 'Skill 2'},
        {id: 3, name: 'Skill 3'},
        {id: 4, name: 'Skill 4'},
        {id: 5, name: 'Skill 5'},]},
      {id: 2, Jobtitle: 'Jobtitle 2', Company: 'Company 2', Industry:'Industry 2', Skill: [
        {id: 1, name: 'Skill 1'},
        {id: 2, name: 'Skill 2'},
        {id: 6, name: 'Skill 6'},
        {id: 4, name: 'Skill 4'},
        {id: 5, name: 'Skill 5'},]},
      {id: 3, Jobtitle: 'Jobtitle 3', Company: 'Company 3', Industry:'Industry 3', Skill: [
        {id: 1, name: 'Skill 1'},
        {id: 2, name: 'Skill 2'},
        {id: 3, name: 'Skill 3'},
        {id: 4, name: 'Skill 4'},
        {id: 9, name: 'Skill 9'},]},
        {id: 1, Jobtitle: 'Jobtitle 1', Company: 'Company 1', Industry:"Industry 1", Skill: [
          {id: 1, name: 'Skill 1'},
          {id: 2, name: 'Skill 2'},
          {id: 3, name: 'Skill 3'},
          {id: 4, name: 'Skill 4'},
          {id: 5, name: 'Skill 5'},]},
        {id: 2, Jobtitle: 'Jobtitle 2', Company: 'Company 2', Industry:'Industry 2', Skill: [
          {id: 1, name: 'Skill 1'},
          {id: 2, name: 'Skill 2'},
          {id: 6, name: 'Skill 6'},
          {id: 4, name: 'Skill 4'},
          {id: 5, name: 'Skill 5'},]},
        {id: 3, Jobtitle: 'Jobtitle 3', Company: 'Company 3', Industry:'Industry 3', Skill: [
          {id: 1, name: 'Skill 1'},
          {id: 2, name: 'Skill 2'},
          {id: 3, name: 'Skill 3'},
          {id: 4, name: 'Skill 4'},
          {id: 9, name: 'Skill 9'},]},
  ]
  export const PositionDetailsingle= [
    {id: 1, Jobtitle: 'Jobtitle 1', Company: 'Company 1', Industry:"Industry 1", Skill: [
      {id: 1, name: 'Skill 1'},
      {id: 2, name: 'Skill 2'},
      {id: 3, name: 'Skill 3'},
      {id: 4, name: 'Skill 4'},
      {id: 5, name: 'Skill 5'},]},
  ]
  // export const PositionDetail= [
  //   {id: 1, Jobtitle: 'Jobtitle 1', Company: 'Company 1', Industry:"Industry 1"},
  //   {id: 2, Jobtitle: 'Jobtitle 2', Company: 'Company 2', Industry:'Industry 2'},
  //   {id: 3, Jobtitle: 'Jobtitle 3', Company: 'Company 3', Industry:'Industry 3'}
  // ]

  export const CourseDetail= [
    {id: 1, title: 'Introduction to Big Data Management', institution: 'Nanyang Technological University', rating: '3.8/5.0', registered: '9.0k Registered', duration: '5.0 hrs'},
    {id: 2, title: 'Introduction to Data Science', institution: 'Nanyang Technological University', rating: '3.9/5.0', registered: '7.8k Registered', duration: '8.0 hrs'},
    {id: 3, title: 'Software Engineering', institution: 'Nanyang Technological University', rating: '4.0/5.0', registered: '9.2k Registered', duration: '25.0 hrs'},
    {id: 4, title: 'Linear Algebra', institution: 'Nanyang Technological University', rating: '4.1/5.0', registered: '9.6k Registered', duration: '3.0 hrs'},
    {id: 1, title: 'Introduction to Big Data Management', institution: 'Nanyang Technological University', rating: '3.8/5.0', registered: '9.0k Registered', duration: '5.0 hrs'},
    {id: 2, title: 'Introduction to Data Science', institution: 'Nanyang Technological University', rating: '3.9/5.0', registered: '7.8k Registered', duration: '8.0 hrs'},
    {id: 3, title: 'Software Engineering', institution: 'Nanyang Technological University', rating: '4.0/5.0', registered: '9.2k Registered', duration: '25.0 hrs'},
    {id: 4, title: 'Linear Algebra', institution: 'Nanyang Technological University', rating: '4.1/5.0', registered: '9.6k Registered', duration: '3.0 hrs'},
    {id: 1, title: 'Introduction to Big Data Management', institution: 'Nanyang Technological University', rating: '3.8/5.0', registered: '9.0k Registered', duration: '5.0 hrs'},
    {id: 2, title: 'Introduction to Data Science', institution: 'Nanyang Technological University', rating: '3.9/5.0', registered: '7.8k Registered', duration: '8.0 hrs'},
    {id: 3, title: 'Software Engineering', institution: 'Nanyang Technological University', rating: '4.0/5.0', registered: '9.2k Registered', duration: '25.0 hrs'},
    {id: 4, title: 'Linear Algebra', institution: 'Nanyang Technological University', rating: '4.1/5.0', registered: '9.6k Registered', duration: '3.0 hrs'},
    
  ]
