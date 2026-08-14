import { Routes, Route } from "react-router-dom";

import PublicRoute from "./PublicRoute.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";
import OnboardingLayout from "../layouts/OnboardingLayout.jsx";

import LandingPage from "../pages/landing/LandingPage.jsx";

import Login from "../pages/auth/Login.jsx";
import Register from "../pages/auth/Register.jsx";
import ForgotPassword from "../pages/auth/ForgotPassword.jsx";
import ResetPassword from "../pages/auth/ResetPassword.jsx";

import Welcome from "../pages/onboarding/Welcome.jsx";
import FinancialProfile from "../pages/onboarding/FinancialProfile.jsx";
import PermissionSetup from "../pages/onboarding/PermissionSetup.jsx";

import KYCStart from "../pages/kyc/KYCStart.jsx";
import PersonalDetails from "../pages/kyc/PersonalDetails.jsx";
import IdentityVerification from "../pages/kyc/IdentityVerification.jsx";
import AddressVerification from "../pages/kyc/AddressVerification.jsx";
import KYCDocumentUploadPage from "../pages/kyc/DocumentUpload.jsx";
import KYCStatus from "../pages/kyc/KYCStatus.jsx";

import Dashboard from "../pages/dashboard/Dashboard.jsx";

import FinancialOverview from "../pages/finance/FinancialOverview.jsx";
import Income from "../pages/finance/Income.jsx";
import Expenses from "../pages/finance/Expenses.jsx";
import Accounts from "../pages/finance/Accounts.jsx";
import FinancialGoals from "../pages/finance/FinancialGoals.jsx";

import BudgetDashboard from "../pages/budget/BudgetDashboard.jsx";
import CreateBudget from "../pages/budget/CreateBudget.jsx";
import BudgetDetails from "../pages/budget/BudgetDetails.jsx";
import BudgetRecommendations from "../pages/budget/BudgetRecommendations.jsx";

import BillsDashboard from "../pages/bills/BillsDashboard.jsx";
import UpcomingBillsPage from "../pages/bills/UpcomingBills.jsx";
import AddBill from "../pages/bills/AddBill.jsx";
import BillDetails from "../pages/bills/BillDetails.jsx";
import PaymentHistory from "../pages/bills/PaymentHistory.jsx";

import LoanDashboard from "../pages/loans/LoanDashboard.jsx";
import LoanComparison from "../pages/loans/LoanComparison.jsx";
import LoanCalculator from "../pages/loans/LoanCalculator.jsx";
import LoanAffordability from "../pages/loans/LoanAffordability.jsx";
import LoanRecommendationPage from "../pages/loans/LoanRecommendation.jsx";

import SavingsDashboard from "../pages/savings/SavingsDashboard.jsx";
import SavingsGoals from "../pages/savings/SavingsGoals.jsx";
import CreateGoal from "../pages/savings/CreateGoal.jsx";
import EmergencyFund from "../pages/savings/EmergencyFund.jsx";

import SurvivalDashboard from "../pages/survival/SurvivalDashboard.jsx";
import IncomeDrop from "../pages/survival/IncomeDrop.jsx";
import SurvivalPlan from "../pages/survival/SurvivalPlan.jsx";
import RecoveryPlanPage from "../pages/survival/RecoveryPlan.jsx";

import DocumentDashboard from "../pages/documents/DocumentDashboard.jsx";
import UploadDocument from "../pages/documents/UploadDocument.jsx";
import DocumentVerification from "../pages/documents/DocumentVerification.jsx";
import DocumentVerificationResultPage from "../pages/documents/VerificationResult.jsx";

import SchemeDashboard from "../pages/schemes/SchemeDashboard.jsx";
import SchemeList from "../pages/schemes/SchemeList.jsx";
import SchemeDetailsPage from "../pages/schemes/SchemeDetails.jsx";

import TransactionHistory from "../pages/transactions/TransactionHistory.jsx";
import TransactionDetails from "../pages/transactions/TransactionDetails.jsx";
import SpendingAnalysis from "../pages/transactions/SpendingAnalysis.jsx";

import AIAssistant from "../pages/ai-assistant/AIAssistant.jsx";
import ChatHistory from "../pages/ai-assistant/ChatHistory.jsx";
import RecommendationDetails from "../pages/ai-assistant/RecommendationDetails.jsx";

import Notifications from "../pages/notifications/Notifications.jsx";

import Profile from "../pages/profile/Profile.jsx";
import Security from "../pages/profile/Security.jsx";
import Permissions from "../pages/profile/Permissions.jsx";
import Settings from "../pages/profile/Settings.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public marketing */}
      <Route path="/" element={<LandingPage />} />

      {/* Auth */}
      <Route element={<PublicRoute><AuthLayout /></PublicRoute>}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>

      {/* Onboarding + KYC (authenticated, but chrome-free) */}
      <Route element={<ProtectedRoute><OnboardingLayout /></ProtectedRoute>}>
        <Route path="/onboarding/welcome" element={<Welcome />} />
        <Route path="/onboarding/financial-profile" element={<FinancialProfile />} />
        <Route path="/onboarding/permissions" element={<PermissionSetup />} />

        <Route path="/kyc/start" element={<KYCStart />} />
        <Route path="/kyc/personal-details" element={<PersonalDetails />} />
        <Route path="/kyc/identity-verification" element={<IdentityVerification />} />
        <Route path="/kyc/address-verification" element={<AddressVerification />} />
        <Route path="/kyc/document-upload" element={<KYCDocumentUploadPage />} />
        <Route path="/kyc/status" element={<KYCStatus />} />
      </Route>

      {/* Main app */}
      <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/finance" element={<FinancialOverview />} />
        <Route path="/finance/income" element={<Income />} />
        <Route path="/finance/expenses" element={<Expenses />} />
        <Route path="/finance/accounts" element={<Accounts />} />
        <Route path="/finance/goals" element={<FinancialGoals />} />

        <Route path="/budget" element={<BudgetDashboard />} />
        <Route path="/budget/create" element={<CreateBudget />} />
        <Route path="/budget/:id" element={<BudgetDetails />} />
        <Route path="/budget/recommendations" element={<BudgetRecommendations />} />

        <Route path="/bills" element={<BillsDashboard />} />
        <Route path="/bills/upcoming" element={<UpcomingBillsPage />} />
        <Route path="/bills/add" element={<AddBill />} />
        <Route path="/bills/:id" element={<BillDetails />} />
        <Route path="/bills/history" element={<PaymentHistory />} />

        <Route path="/loans" element={<LoanDashboard />} />
        <Route path="/loans/compare" element={<LoanComparison />} />
        <Route path="/loans/calculator" element={<LoanCalculator />} />
        <Route path="/loans/affordability" element={<LoanAffordability />} />
        <Route path="/loans/recommendation" element={<LoanRecommendationPage />} />

        <Route path="/savings" element={<SavingsDashboard />} />
        <Route path="/savings/goals" element={<SavingsGoals />} />
        <Route path="/savings/goals/create" element={<CreateGoal />} />
        <Route path="/savings/emergency-fund" element={<EmergencyFund />} />

        <Route path="/survival" element={<SurvivalDashboard />} />
        <Route path="/survival/income-drop" element={<IncomeDrop />} />
        <Route path="/survival/plan" element={<SurvivalPlan />} />
        <Route path="/survival/recovery" element={<RecoveryPlanPage />} />

        <Route path="/documents" element={<DocumentDashboard />} />
        <Route path="/documents/upload" element={<UploadDocument />} />
        <Route path="/documents/verify" element={<DocumentVerification />} />
        <Route path="/documents/result" element={<DocumentVerificationResultPage />} />

        <Route path="/schemes" element={<SchemeDashboard />} />
        <Route path="/schemes/all" element={<SchemeList />} />
        <Route path="/schemes/:id" element={<SchemeDetailsPage />} />

        <Route path="/transactions" element={<TransactionHistory />} />
        <Route path="/transactions/:id" element={<TransactionDetails />} />
        <Route path="/transactions/analysis" element={<SpendingAnalysis />} />

        <Route path="/assistant" element={<AIAssistant />} />
        <Route path="/assistant/history" element={<ChatHistory />} />
        <Route path="/assistant/recommendation" element={<RecommendationDetails />} />

        <Route path="/notifications" element={<Notifications />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/security" element={<Security />} />
        <Route path="/profile/permissions" element={<Permissions />} />
        <Route path="/profile/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}
