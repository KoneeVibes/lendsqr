import { AuditLogs, Dashboard, DecisionModels, FeesAndCharges, FeesAndPricing, Guarantors, Karma, LoanProducts, LoanRequests, Loans, Organization, Preferences, Reports, Savings, SavingsProducts, ServiceAccount, Services, Settlements, Transactions, Users, Whitelist } from "../assets";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddNewUserIcon from '@mui/icons-material/PersonAddAlt';

export const sideNavItems = [
    {
        section: 'Header',
        items: [
            {
                icon: <Organization />,
                title: 'Organization'
            },
            {
                icon: <Dashboard />,
                title: 'Dashboard',
            }
        ]
    },
    {
        section: 'Customers',
        items: [
            {
                icon: <Users />,
                title: 'Users'
            },
            {
                icon: <Guarantors />,
                title: 'Guarantors',
            },
            {
                icon: <Loans />,
                title: 'Loans'
            },
            {
                icon: <DecisionModels />,
                title: 'Decision Models'
            },
            {
                icon: <Savings />,
                title: 'Savings'
            },
            {
                icon: <LoanRequests />,
                title: 'Loan Requests'
            },
            {
                icon: <Whitelist />,
                title: 'Whitelist'
            },
            {
                icon: <Karma />,
                title: 'Karma'
            },
        ]
    },
    {
        section: 'Businesses',
        items: [
            {
                icon: <Organization />,
                title: 'Organization'
            },
            {
                icon: <LoanProducts />,
                title: 'Loan Products',
            },
            {
                icon: <SavingsProducts />,
                title: 'Savings Products'
            },
            {
                icon: <FeesAndCharges />,
                title: 'Fees and Charges'
            },
            {
                icon: <Transactions />,
                title: 'Transactions'
            },
            {
                icon: <Services />,
                title: 'Fees and Charges'
            },
            {
                icon: <ServiceAccount />,
                title: 'Service Account'
            },
            {
                icon: <Settlements />,
                title: 'Settlements'
            },
            {
                icon: <Reports />,
                title: 'Reports'
            },
        ]
    },
    {
        section: 'Settings',
        items: [
            {
                icon: <Preferences />,
                title: 'Preferences'
            },
            {
                icon: <FeesAndPricing />,
                title: 'Fees and Pricing',
            },
            {
                icon: <AuditLogs />,
                title: 'Audit Logs'
            },
        ]
    }
]

export const dialogBoxItems = [
    {
        icon: <AddNewUserIcon />,
        title: 'Add New User'
    },
    {
        icon: <ManageAccountsIcon />,
        title: 'Manage Accounts'
    }
]

export const personalInfoFields = [
    {
        name: 'username',
        placeholder: 'username'
    },
    {
        name: 'useremail',
        placeholder: 'email'
    },
    {
        name: 'password',
        placeholder: 'password'
    },
    {
        name: 'phoneNumber',
        placeholder: 'phone number'
    },
    {
        name: 'firstName',
        placeholder: 'user first name'
    },
    {
        name: 'lastName',
        placeholder: 'user last name'
    },
    {
        name: 'BVN',
        placeholder: 'user BVN'
    },
]

export const personalInfoSelectFields = [
    {
        name: 'maritalStatus',
        option1: 'Single',
        option2: 'Married',
    },
    {
        name: 'children',
        option1: 'None',
        option2: 'Family'
    },
    {
        name: 'Type of Residence',
        option1: "Parent's Residence",
        option2: "Personal Apartment"
    }
]

export const educationAndEmployment = [
    {
        name: 'educationLevel',
        option1: 'Level of Education',
        option2: 'Level of Education'
    },
    {
        name: 'employmentStatus',
        option1: 'Employment Status',
        option2: 'Employment Status'
    },
    {
        name: 'employmentSector',
        option1: 'Sector of Employment',
        option2: 'Sector of Employment'
    },
    {
        name: 'employmentDuration',
        option1: 'Duration of Employment',
        option2: 'Duration of Employment'
    },
    {
        name: 'monthlyIncome',
        option1: 'Select range of Monthly Income',
        option2: 'Select range of Monthly Income'
    }
]

export const socials = [
    {
        name: "twitter",
        placeholder: "Enter twitter handle"
    },
    {
        name: "facebook",
        placeholder: "Enter facebook handle"
    },
    {
        name: "instagram",
        placeholder: "Enter instagram handle"
    }
];

export const guarantorInfo = [
    {
        name: "fullname",
        placeholder: "Enter Guarantor Full Name"
    },
    {
        name: "phoneNumber",
        placeholder: "Enter Guarantor Phone Number"
    },
    {
        name: "email",
        placeholder: "Enter Guarantor Email"
    },
    {
        name: "relationship",
        placeholder: "State Relationship with Guarantor"
    }
]