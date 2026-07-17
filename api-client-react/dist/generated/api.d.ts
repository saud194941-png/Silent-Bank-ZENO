import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { AcceptRecommendation200, Account, AdminMetrics, AnalystInsights, Approval, CancelApproval200, Card, ConfirmApproval200, CustomerRecommendation, CustomerSummary, CustomerTransaction, DashboardSummary, ErrorResponse, GetCustomerTransactionsParams, GetTransactionsParams, HealthStatus, MonthlyData, Notification, Recommendation, RecommendationRule, RejectRecommendation200, SpendingAnalytics, ToggleAdminRule200, Transaction, UserProfile } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetCustomerSummaryUrl: () => string;
/**
 * @summary Customer dashboard summary — greeting, stats, shortcuts
 */
export declare const getCustomerSummary: (options?: RequestInit) => Promise<CustomerSummary>;
export declare const getGetCustomerSummaryQueryKey: () => readonly ["/api/customer/summary"];
export declare const getGetCustomerSummaryQueryOptions: <TData = Awaited<ReturnType<typeof getCustomerSummary>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCustomerSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCustomerSummary>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetCustomerSummaryQueryResult = NonNullable<Awaited<ReturnType<typeof getCustomerSummary>>>;
export type GetCustomerSummaryQueryError = ErrorType<unknown>;
/**
 * @summary Customer dashboard summary — greeting, stats, shortcuts
 */
export declare function useGetCustomerSummary<TData = Awaited<ReturnType<typeof getCustomerSummary>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCustomerSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetCustomerTransactionsUrl: (params?: GetCustomerTransactionsParams) => string;
/**
 * @summary Customer recent transactions
 */
export declare const getCustomerTransactions: (params?: GetCustomerTransactionsParams, options?: RequestInit) => Promise<CustomerTransaction[]>;
export declare const getGetCustomerTransactionsQueryKey: (params?: GetCustomerTransactionsParams) => readonly ["/api/customer/transactions", ...GetCustomerTransactionsParams[]];
export declare const getGetCustomerTransactionsQueryOptions: <TData = Awaited<ReturnType<typeof getCustomerTransactions>>, TError = ErrorType<unknown>>(params?: GetCustomerTransactionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCustomerTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCustomerTransactions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetCustomerTransactionsQueryResult = NonNullable<Awaited<ReturnType<typeof getCustomerTransactions>>>;
export type GetCustomerTransactionsQueryError = ErrorType<unknown>;
/**
 * @summary Customer recent transactions
 */
export declare function useGetCustomerTransactions<TData = Awaited<ReturnType<typeof getCustomerTransactions>>, TError = ErrorType<unknown>>(params?: GetCustomerTransactionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCustomerTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetCustomerRecommendationsUrl: () => string;
/**
 * @summary AI-style proactive recommendations for the customer
 */
export declare const getCustomerRecommendations: (options?: RequestInit) => Promise<CustomerRecommendation[]>;
export declare const getGetCustomerRecommendationsQueryKey: () => readonly ["/api/customer/recommendations"];
export declare const getGetCustomerRecommendationsQueryOptions: <TData = Awaited<ReturnType<typeof getCustomerRecommendations>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCustomerRecommendations>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCustomerRecommendations>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetCustomerRecommendationsQueryResult = NonNullable<Awaited<ReturnType<typeof getCustomerRecommendations>>>;
export type GetCustomerRecommendationsQueryError = ErrorType<unknown>;
/**
 * @summary AI-style proactive recommendations for the customer
 */
export declare function useGetCustomerRecommendations<TData = Awaited<ReturnType<typeof getCustomerRecommendations>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCustomerRecommendations>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetAdminMetricsUrl: () => string;
/**
 * @summary Admin overview metrics
 */
export declare const getAdminMetrics: (options?: RequestInit) => Promise<AdminMetrics>;
export declare const getGetAdminMetricsQueryKey: () => readonly ["/api/admin/metrics"];
export declare const getGetAdminMetricsQueryOptions: <TData = Awaited<ReturnType<typeof getAdminMetrics>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminMetrics>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminMetrics>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminMetricsQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminMetrics>>>;
export type GetAdminMetricsQueryError = ErrorType<unknown>;
/**
 * @summary Admin overview metrics
 */
export declare function useGetAdminMetrics<TData = Awaited<ReturnType<typeof getAdminMetrics>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminMetrics>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetAdminRulesUrl: () => string;
/**
 * @summary List recommendation rules
 */
export declare const getAdminRules: (options?: RequestInit) => Promise<RecommendationRule[]>;
export declare const getGetAdminRulesQueryKey: () => readonly ["/api/admin/rules"];
export declare const getGetAdminRulesQueryOptions: <TData = Awaited<ReturnType<typeof getAdminRules>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminRules>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminRules>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminRulesQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminRules>>>;
export type GetAdminRulesQueryError = ErrorType<unknown>;
/**
 * @summary List recommendation rules
 */
export declare function useGetAdminRules<TData = Awaited<ReturnType<typeof getAdminRules>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminRules>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getToggleAdminRuleUrl: (id: string) => string;
/**
 * @summary Toggle a recommendation rule on/off
 */
export declare const toggleAdminRule: (id: string, options?: RequestInit) => Promise<ToggleAdminRule200>;
export declare const getToggleAdminRuleMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof toggleAdminRule>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof toggleAdminRule>>, TError, {
    id: string;
}, TContext>;
export type ToggleAdminRuleMutationResult = NonNullable<Awaited<ReturnType<typeof toggleAdminRule>>>;
export type ToggleAdminRuleMutationError = ErrorType<ErrorResponse>;
/**
* @summary Toggle a recommendation rule on/off
*/
export declare const useToggleAdminRule: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof toggleAdminRule>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof toggleAdminRule>>, TError, {
    id: string;
}, TContext>;
export declare const getGetAnalystInsightsUrl: () => string;
/**
 * @summary Full analyst insights — journey, acceptance, friction
 */
export declare const getAnalystInsights: (options?: RequestInit) => Promise<AnalystInsights>;
export declare const getGetAnalystInsightsQueryKey: () => readonly ["/api/analyst/insights"];
export declare const getGetAnalystInsightsQueryOptions: <TData = Awaited<ReturnType<typeof getAnalystInsights>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAnalystInsights>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAnalystInsights>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAnalystInsightsQueryResult = NonNullable<Awaited<ReturnType<typeof getAnalystInsights>>>;
export type GetAnalystInsightsQueryError = ErrorType<unknown>;
/**
 * @summary Full analyst insights — journey, acceptance, friction
 */
export declare function useGetAnalystInsights<TData = Awaited<ReturnType<typeof getAnalystInsights>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAnalystInsights>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetRecommendationsUrl: () => string;
/**
 * @summary List all AI recommendations
 */
export declare const getRecommendations: (options?: RequestInit) => Promise<Recommendation[]>;
export declare const getGetRecommendationsQueryKey: () => readonly ["/api/recommendations"];
export declare const getGetRecommendationsQueryOptions: <TData = Awaited<ReturnType<typeof getRecommendations>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRecommendations>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getRecommendations>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetRecommendationsQueryResult = NonNullable<Awaited<ReturnType<typeof getRecommendations>>>;
export type GetRecommendationsQueryError = ErrorType<unknown>;
/**
 * @summary List all AI recommendations
 */
export declare function useGetRecommendations<TData = Awaited<ReturnType<typeof getRecommendations>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRecommendations>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getAcceptRecommendationUrl: (id: string) => string;
/**
 * @summary Accept a recommendation — moves it to approvals
 */
export declare const acceptRecommendation: (id: string, options?: RequestInit) => Promise<AcceptRecommendation200>;
export declare const getAcceptRecommendationMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof acceptRecommendation>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof acceptRecommendation>>, TError, {
    id: string;
}, TContext>;
export type AcceptRecommendationMutationResult = NonNullable<Awaited<ReturnType<typeof acceptRecommendation>>>;
export type AcceptRecommendationMutationError = ErrorType<ErrorResponse>;
/**
* @summary Accept a recommendation — moves it to approvals
*/
export declare const useAcceptRecommendation: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof acceptRecommendation>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof acceptRecommendation>>, TError, {
    id: string;
}, TContext>;
export declare const getRejectRecommendationUrl: (id: string) => string;
/**
 * @summary Reject a recommendation
 */
export declare const rejectRecommendation: (id: string, options?: RequestInit) => Promise<RejectRecommendation200>;
export declare const getRejectRecommendationMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof rejectRecommendation>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof rejectRecommendation>>, TError, {
    id: string;
}, TContext>;
export type RejectRecommendationMutationResult = NonNullable<Awaited<ReturnType<typeof rejectRecommendation>>>;
export type RejectRecommendationMutationError = ErrorType<ErrorResponse>;
/**
* @summary Reject a recommendation
*/
export declare const useRejectRecommendation: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof rejectRecommendation>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof rejectRecommendation>>, TError, {
    id: string;
}, TContext>;
export declare const getGetApprovalsUrl: () => string;
/**
 * @summary List pending and confirmed approvals
 */
export declare const getApprovals: (options?: RequestInit) => Promise<Approval[]>;
export declare const getGetApprovalsQueryKey: () => readonly ["/api/recommendations/approvals"];
export declare const getGetApprovalsQueryOptions: <TData = Awaited<ReturnType<typeof getApprovals>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getApprovals>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getApprovals>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetApprovalsQueryResult = NonNullable<Awaited<ReturnType<typeof getApprovals>>>;
export type GetApprovalsQueryError = ErrorType<unknown>;
/**
 * @summary List pending and confirmed approvals
 */
export declare function useGetApprovals<TData = Awaited<ReturnType<typeof getApprovals>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getApprovals>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getConfirmApprovalUrl: (id: string) => string;
/**
 * @summary Final confirmation — marks as confirmed_demo (no real execution)
 */
export declare const confirmApproval: (id: string, options?: RequestInit) => Promise<ConfirmApproval200>;
export declare const getConfirmApprovalMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof confirmApproval>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof confirmApproval>>, TError, {
    id: string;
}, TContext>;
export type ConfirmApprovalMutationResult = NonNullable<Awaited<ReturnType<typeof confirmApproval>>>;
export type ConfirmApprovalMutationError = ErrorType<ErrorResponse>;
/**
* @summary Final confirmation — marks as confirmed_demo (no real execution)
*/
export declare const useConfirmApproval: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof confirmApproval>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof confirmApproval>>, TError, {
    id: string;
}, TContext>;
export declare const getCancelApprovalUrl: (id: string) => string;
/**
 * @summary Cancel a pending approval
 */
export declare const cancelApproval: (id: string, options?: RequestInit) => Promise<CancelApproval200>;
export declare const getCancelApprovalMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof cancelApproval>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof cancelApproval>>, TError, {
    id: string;
}, TContext>;
export type CancelApprovalMutationResult = NonNullable<Awaited<ReturnType<typeof cancelApproval>>>;
export type CancelApprovalMutationError = ErrorType<ErrorResponse>;
/**
* @summary Cancel a pending approval
*/
export declare const useCancelApproval: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof cancelApproval>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof cancelApproval>>, TError, {
    id: string;
}, TContext>;
export declare const getGetDashboardSummaryUrl: () => string;
/**
 * @summary Get dashboard summary with balances, stats, and recent transactions
 */
export declare const getDashboardSummary: (options?: RequestInit) => Promise<DashboardSummary>;
export declare const getGetDashboardSummaryQueryKey: () => readonly ["/api/dashboard/summary"];
export declare const getGetDashboardSummaryQueryOptions: <TData = Awaited<ReturnType<typeof getDashboardSummary>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDashboardSummaryQueryResult = NonNullable<Awaited<ReturnType<typeof getDashboardSummary>>>;
export type GetDashboardSummaryQueryError = ErrorType<unknown>;
/**
 * @summary Get dashboard summary with balances, stats, and recent transactions
 */
export declare function useGetDashboardSummary<TData = Awaited<ReturnType<typeof getDashboardSummary>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetAccountsUrl: () => string;
/**
 * @summary List all user accounts
 */
export declare const getAccounts: (options?: RequestInit) => Promise<Account[]>;
export declare const getGetAccountsQueryKey: () => readonly ["/api/accounts"];
export declare const getGetAccountsQueryOptions: <TData = Awaited<ReturnType<typeof getAccounts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAccounts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAccounts>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAccountsQueryResult = NonNullable<Awaited<ReturnType<typeof getAccounts>>>;
export type GetAccountsQueryError = ErrorType<unknown>;
/**
 * @summary List all user accounts
 */
export declare function useGetAccounts<TData = Awaited<ReturnType<typeof getAccounts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAccounts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetAccountUrl: (id: string) => string;
/**
 * @summary Get account by ID
 */
export declare const getAccount: (id: string, options?: RequestInit) => Promise<Account>;
export declare const getGetAccountQueryKey: (id: string) => readonly [`/api/accounts/${string}`];
export declare const getGetAccountQueryOptions: <TData = Awaited<ReturnType<typeof getAccount>>, TError = ErrorType<ErrorResponse>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAccount>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAccount>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAccountQueryResult = NonNullable<Awaited<ReturnType<typeof getAccount>>>;
export type GetAccountQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get account by ID
 */
export declare function useGetAccount<TData = Awaited<ReturnType<typeof getAccount>>, TError = ErrorType<ErrorResponse>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAccount>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetTransactionsUrl: (params?: GetTransactionsParams) => string;
/**
 * @summary List transactions with optional filtering
 */
export declare const getTransactions: (params?: GetTransactionsParams, options?: RequestInit) => Promise<Transaction[]>;
export declare const getGetTransactionsQueryKey: (params?: GetTransactionsParams) => readonly ["/api/transactions", ...GetTransactionsParams[]];
export declare const getGetTransactionsQueryOptions: <TData = Awaited<ReturnType<typeof getTransactions>>, TError = ErrorType<unknown>>(params?: GetTransactionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTransactions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTransactionsQueryResult = NonNullable<Awaited<ReturnType<typeof getTransactions>>>;
export type GetTransactionsQueryError = ErrorType<unknown>;
/**
 * @summary List transactions with optional filtering
 */
export declare function useGetTransactions<TData = Awaited<ReturnType<typeof getTransactions>>, TError = ErrorType<unknown>>(params?: GetTransactionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetTransactionUrl: (id: string) => string;
/**
 * @summary Get transaction by ID
 */
export declare const getTransaction: (id: string, options?: RequestInit) => Promise<Transaction>;
export declare const getGetTransactionQueryKey: (id: string) => readonly [`/api/transactions/${string}`];
export declare const getGetTransactionQueryOptions: <TData = Awaited<ReturnType<typeof getTransaction>>, TError = ErrorType<ErrorResponse>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTransaction>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTransaction>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTransactionQueryResult = NonNullable<Awaited<ReturnType<typeof getTransaction>>>;
export type GetTransactionQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get transaction by ID
 */
export declare function useGetTransaction<TData = Awaited<ReturnType<typeof getTransaction>>, TError = ErrorType<ErrorResponse>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTransaction>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetCardsUrl: () => string;
/**
 * @summary List all user cards
 */
export declare const getCards: (options?: RequestInit) => Promise<Card[]>;
export declare const getGetCardsQueryKey: () => readonly ["/api/cards"];
export declare const getGetCardsQueryOptions: <TData = Awaited<ReturnType<typeof getCards>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCards>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCards>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetCardsQueryResult = NonNullable<Awaited<ReturnType<typeof getCards>>>;
export type GetCardsQueryError = ErrorType<unknown>;
/**
 * @summary List all user cards
 */
export declare function useGetCards<TData = Awaited<ReturnType<typeof getCards>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCards>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetCardUrl: (id: string) => string;
/**
 * @summary Get card by ID
 */
export declare const getCard: (id: string, options?: RequestInit) => Promise<Card>;
export declare const getGetCardQueryKey: (id: string) => readonly [`/api/cards/${string}`];
export declare const getGetCardQueryOptions: <TData = Awaited<ReturnType<typeof getCard>>, TError = ErrorType<ErrorResponse>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCard>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCard>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetCardQueryResult = NonNullable<Awaited<ReturnType<typeof getCard>>>;
export type GetCardQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get card by ID
 */
export declare function useGetCard<TData = Awaited<ReturnType<typeof getCard>>, TError = ErrorType<ErrorResponse>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCard>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetSpendingAnalyticsUrl: () => string;
/**
 * @summary Get spending breakdown by category
 */
export declare const getSpendingAnalytics: (options?: RequestInit) => Promise<SpendingAnalytics>;
export declare const getGetSpendingAnalyticsQueryKey: () => readonly ["/api/analytics/spending"];
export declare const getGetSpendingAnalyticsQueryOptions: <TData = Awaited<ReturnType<typeof getSpendingAnalytics>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSpendingAnalytics>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSpendingAnalytics>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSpendingAnalyticsQueryResult = NonNullable<Awaited<ReturnType<typeof getSpendingAnalytics>>>;
export type GetSpendingAnalyticsQueryError = ErrorType<unknown>;
/**
 * @summary Get spending breakdown by category
 */
export declare function useGetSpendingAnalytics<TData = Awaited<ReturnType<typeof getSpendingAnalytics>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSpendingAnalytics>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetMonthlyAnalyticsUrl: () => string;
/**
 * @summary Get monthly income vs expenses for the past 6 months
 */
export declare const getMonthlyAnalytics: (options?: RequestInit) => Promise<MonthlyData[]>;
export declare const getGetMonthlyAnalyticsQueryKey: () => readonly ["/api/analytics/monthly"];
export declare const getGetMonthlyAnalyticsQueryOptions: <TData = Awaited<ReturnType<typeof getMonthlyAnalytics>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMonthlyAnalytics>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMonthlyAnalytics>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMonthlyAnalyticsQueryResult = NonNullable<Awaited<ReturnType<typeof getMonthlyAnalytics>>>;
export type GetMonthlyAnalyticsQueryError = ErrorType<unknown>;
/**
 * @summary Get monthly income vs expenses for the past 6 months
 */
export declare function useGetMonthlyAnalytics<TData = Awaited<ReturnType<typeof getMonthlyAnalytics>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMonthlyAnalytics>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetNotificationsUrl: () => string;
/**
 * @summary List user notifications
 */
export declare const getNotifications: (options?: RequestInit) => Promise<Notification[]>;
export declare const getGetNotificationsQueryKey: () => readonly ["/api/notifications"];
export declare const getGetNotificationsQueryOptions: <TData = Awaited<ReturnType<typeof getNotifications>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getNotifications>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getNotifications>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetNotificationsQueryResult = NonNullable<Awaited<ReturnType<typeof getNotifications>>>;
export type GetNotificationsQueryError = ErrorType<unknown>;
/**
 * @summary List user notifications
 */
export declare function useGetNotifications<TData = Awaited<ReturnType<typeof getNotifications>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getNotifications>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetProfileUrl: () => string;
/**
 * @summary Get user profile
 */
export declare const getProfile: (options?: RequestInit) => Promise<UserProfile>;
export declare const getGetProfileQueryKey: () => readonly ["/api/profile"];
export declare const getGetProfileQueryOptions: <TData = Awaited<ReturnType<typeof getProfile>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetProfileQueryResult = NonNullable<Awaited<ReturnType<typeof getProfile>>>;
export type GetProfileQueryError = ErrorType<unknown>;
/**
 * @summary Get user profile
 */
export declare function useGetProfile<TData = Awaited<ReturnType<typeof getProfile>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map