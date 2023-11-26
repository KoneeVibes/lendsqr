import { AuditLogs, Dashboard, DecisionModels, FeesAndCharges, FeesAndPricing, Guarantors, Karma, LoanProducts, LoanRequests, Loans, Organization, Preferences, Reports, Savings, SavingsProducts, ServiceAccount, Services, Settlements, Transactions, Users, Whitelist } from "../assets";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

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
        icon: <PermIdentityIcon />,
        title: 'Change Avatar'
    },
    {
        icon: <ManageAccountsIcon />,
        title: 'Manage Accounts'
    }
]