# from sklearn.model_selection import train_test_split
# import sklearn.linear_model
# import sklearn.metrics
# import matplotlib.pyplot as plt
# import sklearn.preprocessing
# from sklearn.neighbors import KNeighborsRegressor
# from sklearn.tree import DecisionTreeRegressor
# import numpy as np
# from sklearn.tree import plot_tree
# import string


# # LinearRegression --> sklearn.linear_model
# # PolynomialRegression --> sklearn.preprocessing
# # KNeighborsRegressor --> sklearn.neighbors
# # DecisionTreeRegressor --> sklearn.tree

# x = np.array([[10], [20], [30], [40], [50]])
# y = np.array([100, 120, 150, 180, 220])

# """
# 10 -> 100
# 20 -> 120
# 30 -> 150
# 40 -> 180
# 50 -> 220
# { 15, 25, 35, 45 } --> ( 35 )
# [ [100, 120, 150] - [180, 220] ]
# [     123.33333   -    200     ]
# if x <= 35 -> 123.33333
# else -> 200
# """

# x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, shuffle=False)
# model = DecisionTreeRegressor(random_state=42, max_depth=1)


# """
# x → y
# 5  → 10
# 12 → 20
# 18 → 40
# 25 → 45
# 32 → 85
# 40 → 95
# { 8.5, 15, 21.5, 28.5, 36 } --> ( 21.5 )
# [ [10, 20, 40] - [45, 85, 95] ]
# [ ((10 + 20 + 40) / 3), ((45 + 85 + 95) / 3) ]
# [ 23.333333, (225 / 3) -> 75 ]
# if x <= 21.5 predict 23.33333
# else predict 75
# """
# model.fit(x_train, y_train)

# prediction = model.predict(x_test)
# print(f"Prediction Of {x_test} --> {prediction}")


# # x_train, x_test, y_train, y_test = sklearn.model_selection.train_test_split(
# #     [[-3], [-2], [-1], [0], [1], [2], [3]], [-5, -3, -1, 1, 3, 5, 7], test_size=(1 / 5)
# # )

# # print(x_train)
# # print(x_test)
# # print(y_train)
# # print(y_test)

# # model = sklearn.linear_model.LinearRegression()
# # model.fit(x_train, y_train)

# # print(f"The Pattern Of {x_test} --> {y_test} Is {round(model.coef_[0])}x + {round(model.intercept_)}")
# # print("Coef:", model.coef_)
# # print("Intercept:", model.intercept_)

# # predictions = model.predict(x_test)

# # print(f"Prediction Of {x_test}: {predictions}")
# # print(f"Reak: {y_test}")

# # # messure how much its correct

# # print(sklearn.metrics.mean_squared_error(y_test, predictions))
# # print(sklearn.metrics.r2_score(y_test, predictions))

# # # Visualize Our Data

# # # plt.title("Data Distrbution")
# # # plt.xlabel("Train")
# # # plt.ylabel("Test")
# # # plt.ylabel("Test")
# # # plt.scatter(x_train, y_train, color="red", marker="X", s=10, label="Trained Data")
# # # plt.scatter(x_test, y_test, color="#00FF00", marker="X", s=10, label="Tested Data")
# # # plt.show()


# # # Now Visualize how much does prediction matches the real one

# # plt.title("Prediction Accurate")
# # plt.scatter(x_test, y_test, color="red")
# # plt.plot(x_test, predictions, color="green") # r2_score will equal 1.0 && mean_squared_error will equal 0.0
# # plt.show()

