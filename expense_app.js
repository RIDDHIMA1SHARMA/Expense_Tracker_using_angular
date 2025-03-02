var app = angular.module("expenseApp", []);

app.controller("ExpenseController", function ($scope) {
    $scope.expenses = [];  // Expense list

    $scope.addExpense = function () {
        if ($scope.expense.description && $scope.expense.amount && $scope.expense.date) {
            $scope.expenses.push({
                description: $scope.expense.description,
                amount: parseFloat($scope.expense.amount),
                date: new Date($scope.expense.date)
            });

            // Clear input fields after adding
            $scope.expense = {};
        }
    };

    $scope.getTotal = function () {
        return $scope.expenses.reduce((total, exp) => total + exp.amount, 0);
    };

    $scope.removeExpense = function (index) {
        $scope.expenses.splice(index, 1);
    };
});
