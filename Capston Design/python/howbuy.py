import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# 데이터 생성 (예시)
data = pd.read_csv('../python/howbuy.csv')

df = pd.DataFrame(data)

# 그래프 생성
sns.set(style="ticks")
sns.pairplot(df, hue="MBTI_TYPE", markers=["o", "s", "D", "x", "P"])
plt.show()
