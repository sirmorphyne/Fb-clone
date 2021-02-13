import React from 'react'
import './StoryReel.css';
import Story from '../Story/Story';
function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://th.bing.com/th/id/OIP.TwoV23DP5z7TD9wMKFyAsAHaD5?w=329&h=180&c=7&o=5&dpr=1.25&pid=1.7" 
            profileSrc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADhALYDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAUGAwQHAQII/8QAPBAAAgEDAwIEBAMFCAEFAAAAAQIDAAQRBRIhMUEGE1FhFCJxgTKRoQcjQlKxFSQzU2Jy4fDRFoOSosL/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAwUBAgQG/8QAMBEAAgIBAwMCBAUEAwAAAAAAAAECAxEEEjEFIUETUSJhcfAygbHB0RQjkaFC4fH/2gAMAwEAAhEDEQA/AOt0pSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSvncm7bkbgMlc84+lfVAKUrwsqhmYgKoLMScAAckkmgPaV8RyRyosiMGRhlSO9fdAKUpQHnPbr2zWvZ3lvfQJcQNlC0sbA/iSSJ2ikRh6qQQfpWz6VzvwBf3Nxq/jqBXLaeNUlu4R/Ck080wbaf9QCk/n35yDolKUrAFKUoBSlKAUpSgFKUoBSlKAwXVwlrBLMwztACKOru3CqPqar95dGKG6vr2SRktYnnkVHZEAUcJGqnHPAHXrUxqkd3JAgt4w7I5cqSAchSFIz6HBPNVSeDUbrSdb066bbKkAjF1MvlxuwVZyHLehG1j7+3PNdJppeCauOU35KDea1q15e/HNdSwzJkQeRLIvw8ec+XGc5x6knnv7bsfjTxdEFH9quwAGDLDbsCB6nZk/nUEQyStFIrpIACyONsi5GQcdfpV40XS/D3iGzjuvhzZavYTwrcy2J8pHlQiVJjbkGLD45wo5Bqe66NMdz4I1Ft4PLD9o2qxFF1Gzt7uPvLbEwTY9cHMZ/8ArVxstZsfEMKPZiX4NJNl358bITKuD5HPykDILYJ9O9Q2seEdGvvNnt42s7h9zM9mFVcn+IwsDGfyFSunrp9haWlhbJ5UNtGEjVjksSclmbuzHJJ9TVTqOqVqvEOzJ46eT+LlG1Z3rRWkcMaeZcgy4UkhVVSRvkPpnNZBe3U76eqjyRNJHuUgeY6qu+QkHovQDvz26Vhgt7a1jujDGsZmee5mYfikmkyzO565rBaXDteRzyxSFYbd0jESFgXYgHLMQufvWK+ouyyMcYT/AGQ9D4ZTXgsdKjZr+dIzJ5MSKCD++m+YjIB4jUjPpycnitPUvFGjaRAH1GQR3JTf8HEyyzgHoHxgD7kVa12wsyoPJztNcmfxJqY0fQ9X1Af4kNsyW4HVrmYiKIAf7iKiPAfh+bQtGX4pSt/fyC7u1JBMZKhUiJHdQBn3JrJYLqXiWSy1LVLJbTS7SZbzTLGXLTzTqCI7q6yBjbkmNccE5PIG201K+3Ywe0pSsAUpSgFKUoBSlKAUpSgFKUoBWlPpunXEvny20ckowRvLbGZehZfw/fFbtPX70HBW76w0nVdyX2j6XLJGBGwnJaaMdl3xoGA9MNWvpeh6Xo8t1JYWyWy3McaTRxzXMqu0bEqcTscYyenrUtM1uGZ7Nd7EkyLGFEDknkmQ4APuM+4rC85UgNDJyQARtIJPoRXn+o6m2Oa9yw/odNNe7ujMMngVgmsg5Z1YoT3HKn7f81sKGIX5SpOOMgn6VriOL4oeXKu5dxeJTk7iMcAcfWqVpOPxLJ01txbcXgyhCYvLdicpsZgME9iQOaxyZgj8q1jDyKA21mPAY4yeR/X/AJ2GO3aCQC34VPU+uBWl5UzTXTiQxzZBjUY2+XjCnJ65xg+4NGu2EjNbT/E+3JBa7H4vdM6cY7eNITJc3pSW4uwRn93Z20CHnHQ5zzxjG4+eD/CFpbIl9rDx3mrBvO8qRvNW0ZmLAybid0vPJJOD0/macTULhAfMCgpuMuEbzFCAlhhAeRjstQJ8QeJb4Rw+EdOmljd9019q9i0EJDc7455JEZj/AOyav+lXfC61x9P1ZHq4STUpYOgAAcAfpSq5YaHrUjC417Wrq7lPPwto5tbJPYrDtZvuftX1qmnarY21xe6FqF1HcW0bz/BXssl3ZXSxqWMWJy0iE/wlXH054vMHAWKlQ3hzXrTxFpcGowKY2JMVzAx3NBOoBZCfTkFT3BFTNYApSlAKUpQClKUApSlAKUpQCsc0MU6GOUMUJBwGZTkHI5UislKAh7yG6hC+U8hh4DE+SZNzEKqoTg/1NeAmFJVDAeRGHd2+Yn5S5Lbj7VtX8F3PtWJljjSOV/M/FIJSCo2J0zjOCTxnoccVm+vsWfi9f4o9Bluoc5y6pBLA/PTggD7+9UWt0+JqUI4+/wDw66pZjhvgg7vx/A64tIpJUb8MjvHaxsOxAAaQg/aor/1bqtw37iKxQjoIYprhwf8A5/8A5resINMWGyuYrO3MbQRtjyoc7HUHIAXGRX3f6pM0wgtmgjt7XyoCtt5cTzRoA7HeoL5Y5QEDt0+bNdkem6dfiWfq/tf6D1Vi7R7fQ0xr/jJJreVII5PLZHeO4t1tvNiOdyqzHeCe3y1bdd1drTRrXxDZR+bFbTQm5jJCyfDTOIZE9A6Ptzn0I75EKQJppbkgJAoADylY0AAxuZmIA796jNP1FNQTxxoEO+az1CyuLjT5UBljW/SBfMRWHZyoZTwCwOPxVrdoaYxTjHC8mqum33ZKaz4peKx0rxJoRtp7aac2OoJMHWaGbZvj3bWBBwCrZB7Hvkynhfxpp2rTi3kmis7iTA+EucqJJD1a2mzsOe6kA+3rQ9N8LalbRag19OY7OaaG2uLEkGeYo+9POMZ2KVIyCGJ6jIBOa1f28dreX1qjF44Z3jUk5OAc4JHcdPtW+kqphKSh3a8/z4yb2xs2Jy+/+j9M0IDAqwBUgggjIIPY1x3w3461HTWhtr9pLzTcIEZjuuoF6HYzH5gPQn79q6xYajp+p26XdjcRzwPwHjP4WHVXU8gjuCBXemmRW0Tq549zX0zRNJ0Zr86bbi3jvZknmhjyIVkVdm6NOgyMZA44qTpSskApSlAKUpQClKUApSlAKUpQClKUAquaxpMK2F40SsS9tf2srKMuIL1gXIHIO04Y/T87HXjAMpVgCpBBB5BB4IIrWcd0XH3Mp4eTkY0260ZZltry8fTrWSCJ5ZLaxOxriMSokKSSbyozjOMZBAHynErZaba36xynV9SBmDYRLO1sycDLAssbcjvzn86sTWPwom095LiWIgyoz7G3QOzHy5CwIIRs4yvGRznk5VRdijL5VkcFjlspwOvtxXFOcoxUW3u8+35eSeMdzz4/2Vu48O2UqokNq0svmRwi51mWa5VGJLGTymfZ5agEngbjheh5yaRp97tliubu5Kw3qOiLOogltwsgkWSGzxajJKFcDOQSDxVk+XHGc9a+WJcY+f22EA+nBJA/Wo427YyTWW/L8fQ3deWnnCRA3gYX1zEi7zcXVu5XnggCTPHbk5/5rjdwtzHc3kVwCJ47ieOcH/NVyH/Wuja5rsen6xNZsXijvtNv1kmMpaW3ldWjtZQ4JIyU556MD2551c3tzqFzLeXez4iYIZ2jUKJZFQIZGA43NjLY759a20UJxnJtdmTaucZKMfK/g9imEQwfwE5OOqn1FSemazfafcGfS7xopvl3mNyEkUdBNEcoR9qjLKFbiVnkUNHFxg8hpG56dOB/WpUAA4CgewAAqycN3cjq1kq47Gsr5nUNB8c/GxQnUYkVXYxi4iyq7lO0lkPbPcH7DrV4R1kVXU5VhkEd6/Ptvc/Czksf7tO4E4/y5D8qyj68Bvse3PRPC2uNaSrp11ITaynFu8jf4Mn8mT2bt78d64FdKq30bfPD/YnnpoX0u+jtjlfujoFK8ByM17XcVYpSlAKUpQClKUApSlAKUpQClKUBpahatcRK0QHxFu3mwbiQrHGCjY7H/wAHtULLcRRW09xJ5qpEQH2KDIjeYsZDKxAG0nLc9Mn62eo+80/zjJNBsWV02SpJzDOmNu2RfXHAP9RxXPbSp91yS1z29mVx9bsYzIWaWQxF4jGsYhjVlYqxdnJYnII/Fj2rMmpRJpFxqd9CLSOGCaedGJfYFJVSu5QcnjAx1OK8mtraKdpJbe1t5chme5ineXcO6mP5G9jkn78VCeNtO1nUtHiEUq2unpcw74JUKTXsrZCM7ZwqA/hBHJOTjAC87guEsfM7HKDSUF3OTahqEmqX97fyIqLNJ+6j5KxRIAkaAewArXZiAMDJbgAdz7VmltWjLwurJJG21kbggj1Fe2sXm3K5HywAOR23dFB/r9qsYpJLHBwyby93JKW0fkRRx4GQAXI/ic/iP519gsxYpgL0Utn5vUj29P8AufCvAUcbjt57LjLEfb+tZOPXjtUhoR8rXVy80cSSNs80GOMZk2qMkuq9cYqzwGRoLfzM7vKh8zJ5zsANVy5TyZPjYHeOeHEilfwsV/nH6GrHZ3MGoxDy8Jc7V82JeVb/AG45NVuv08r4LZyi56Xqq9PN7+GdX8M6g9/pNq0rZmhzBKTjLNGdu779fvU3XFob7UtMmWazmkibKrKh5UsMjDoeO1X3w/4utL9bez1KWGDUiNoOQkVycnaUBPDEdRn6e0umt9WpS8+fqcet07puklxyvoy2UpSug4hSlKAUpSgFKUoBSlKAUpSgFKV4SAMk4/7mgHFRev2ZvtJv7dd28osibBlsxsHyoPfjiql4p8di33WGgyxSXOWW5vABIkGMDZB/Azep5A9z+Go2PjvxM4axmunkso2Pm35jkknj4y0fmREZHpkj64pZB7H2/kkqfxp5weatYRy+YsyhbuKJpIJVHEyKCQue4Pb0P5GuWaoElIxvL7nJ7gjC/wDf/NXgXvh/U4ViivZhKz7oGuoY4cORy0TpK6MG7qWGe3PFUu+hntNYubUqkOZI0RlXKBSiuWjzgEHrj37dqzp8ra5Oi9YeMr7+8FnrnVdFXVv5MyN+OPnA+ZfuQMf0r3A7nNYLF7m/E0YihEiRLIpLsqk7gAMYNbslvcQ4LwSlR3i2y4+oQ7v0qyd9alsclkr1p7ZR3qLaMRRWVg3IIIxjjH0NR3ws0UhNvIDETko5Ybf9pFbb3doCwMoUg4O/K49iGA5rLE8bKHUqVYZBHf8AOpcJkOWmeRz3VrbFRKXjj+YRygMijPCqT8305rY0y8tzNCW2MyTR3X71QWLQusnOeD0/7isEkSzrhs7QwYjOMnsDjtXy8TFUEbBHjYGM7QQvBBGPQ1qq4x/CsEjtlLG55P0TDIssUMikFZEVwfYjNZK5d4V/aOrSW+ma8kMOdsVvewqI4Q2doSdOg9mHHqB1rqAIIyOhGawyI9pSlYApSlAKUpQClKUApSlAeHoa494l8XalrGp32iaa0vwiTS2qpbZ33vlnDszjogIPGQMDJJzx1u7Uva3S+a8W6GVfNjALx5UjeueMjqPpXK9G0az0hJRHIZ5pWYNdMmxpIgx2YXkgYwcZ6/pxa3XR0VfqYy3wjq0umepntzhLkiLTwtPMc6jKEiIH92tXO5h3WWXb09l/OrrZXc2nxRQW8dutvEgSOGOPyVUD+VoNrZ9+fv3wKf4QOlfLsqFiTgAFmPXCgZJxXj7Orau2e/fj5Lg9HDQURWzb/Jh1bQdJ1qGe6sVhstTUbmLBIYp2J4S8VAIyGzhJQoOSAw7GkWJe8vks5ZdtzbxpJELnJ/wWKtC5HIK+vPGfTmfn1H4lIhJa4TeG3LLnELDDq67QTuHXnqB6VEarCLbxToE0Qw14bMuFA5be9o/HuBk17Lp2plqKv7q+JFHrtJ/Sz7cM1ILM2Fw7xq6RujoQrxyqADlCVZg3UYOPy4rM2qRoSBa38rg4Pl27qhPpluf0qZ82KC/vBHZxXLSTJFbq/wCMEsx8uMkEAc5Jx9+K+4La4m86byLICaadgzNdPnMjfMEVlTB7cdKodTqIuxu6PHbnGT0FFLrrUapYT79+5Ur4z6lnborxyHCiaUusuB0xnYv5g1gm/tWyiSW5tw0edpZXXeuP59mVH5VeF0cM2XuWGc5EMSKMeg3lqTWFlbIMyXkzPwkMaxl5PY4TAHqSa3q6vGvEILt+f6sgt6bG5uU5Pd9F+yKXb3xuAuy3fbk5cyJhfsBkmtkyxIPndB3+ZgD+vNbWraHIwVoxbW9ysTSAQkjK9QJGVQNx5wfb0NQ8dgiKPiDI83SQFyAjDqo2nt9a9BptXDUxzFlDqtJPTSxLuvc+Lj4RnBhXJwfMODjJPbP611j9l+r3V3Y6jplw7v8A2Y8JtmcliLeYMQmTz8pVgPbHpXMUtLNQMxnPqXcn9TVj/Z/rD6TrzaeY0eDVpPIdzw6TQq5QqfQ8jHuPv1NHIdvpSlRmBSlKAUpSgFKUoBSlKAjNcuWttOuCjbZJdsKHuN7BTt98ZxVJHGfXAAHoOgFWjxOV8mwQnrO7Y9dqGqtg5yPXIrx/XbG7ow9l+p6TpMEqnL3Z9ru/P06k+lRWq3ibPgoHRri5+SQIdxig6uxI4BPQfWs2qzvFbLCkmyW4cIcHEhhwxfb3A6An396hYo0jkCQQje5SJViQbndiAqDHc9qrdNQnib/JF3CGcyfB9yGNEYZAwrZJwABtJySa2bbQPEWv6rFrFraCKxtrdLSwnvC0BkYhi1ykbDftyzFTtHY9uLRpHgmUPFc6tcE7Ssq2luwKBgdw82QqCceg4+tXtQAAB0Ar2Gg006Yy39nI871PXV3Th6XdR/wc4vfB02kWCXltdSTXFsrNOFBTarDYxgzkhQM5BJ6Zz2rBZussf7mMxxwnylVsE4QAcEdu1X3W5hBpWpyHtbSgf7iuB+uK5jHIYmVnaQQ7WWVUd1AyB+8G0jkYqr6vpYYjs5Ovpt9l8JObzhkztUAuxCgdSxCr9yeKj7rU4I8mIqxxnfIu2P6gHBP6D615Lp9tLtd3uZExuQpPI4KnurMx/Q1qMunwuywWrech2sbgEsh69CSf1Fefqrhnyy4ilnuaimfUZUt7ZJpprolVZQwLyHnKswxx1Pbj0FbPivQ5NHl0R2CsLqwhhnZBhTd26hZCB/qGDVu8GWRne91W5Tc8cnwlkzEnaFUGVl7dTt46Yx61sftAtlm0JZ8DdaXkEgOOQsmYj/UV7XptPpw3vlnmOrar1bPSXEf1+/3OSlYz2OenBNaEU82m6jb3lv8A41ncxXUPm5IZlO7D85weQfrUgCMHPHqT0H3qOvwN6SLypUgsoJUFTnlhx39atinR+i9K1CHVdO0/UYQVjvLeKdVOMrvUHBx6VvVRv2Zait14eWzJ/eabcTW5Hfy3bzo/0bH2q81G+TApSlYApSlAKUpQClKUBXvE8MjQWc6j5IZXWU8/KJMAMfbIx96pWpT3NpFAYgAZpTGZHG4R4UsML0yecZ9O9dL1KF57DUIYwC8trcRoD0LPGygfrXAZPEurQRNYXaRXTIuwyS5Mu1fwsxQj5hx1zVFr+mzvtV0O/ui66frYUx9OzgnFDMXldneV8bpJCzO2OnJ/Srh4H03T7kX2pS+VPPb3bWkCn5vhTEg3nHTcxP5Y9a5RLrOqXCMu5beMjG2AYkP1ckt+Rrq/7LYJY/D08skUkfxOoTyqz7gJk2oqyKCMY4xx1xmp9HoZVy32fkiXqHUo21+lTnHll8Fe0pVsUBAeLWxo8q/zz26n3XzFOP6VzxgHjZSTyp/Lriuo6zaLe6bewkZbymeI+kiDcp/MCuWSsRCWwFYAblz37gVR9Ui90ZfI9N0aa9OUPOc/f+DUhnvLcgW0pQMcOjfMnP8AGFPQjrW7aQNeXlpZRu2+5lwxyQ20fO7FsHnAOPetRcqGbICAE5PYV0PwtoEVjBHqFxua+uo1Yq4wLdWAYoo65/mPt7Vw6TT+vZx2XJ3azUrTVOX/ACfBZLW2gtLeC2gRUhgRY41XoAKgPG/xreG9RisrZbm5uJLS2jiOc5lnjTcMEcjr1wMZPAqyCorVXAktEPIUSTbf5nGI0H3Jr1EpbY59jxi+JlJ0bwdZ2KLNqchvr9lHmdrWEnnZAhHQevBPtnFT01jaeTN5ceNsTnaWYxuoU5RlYkYIyPvW0GCkRnLPHGhdu2W9fc4z9Prz7GyvtGQwYcsuNpB9PrVVKTm8yLCEnD8PZHN/BVzc6J4zu9HiVmtb1po9oJISJFa5hlz7KSp+vtXa6pHhnQYF1rV9ekYNKY4dOt1A4QQqqSMSe5Kj6Ad88XerWEt0EzitSjZJL3FKUrYjFKUoBSlKAUpSgPGAKsDjoa/NWvwR2mraiqfgN1cqpB/ypWQjP5V+jr2R4rO9lRWZ47ed0VPxMyoSFX3NfnPVdOMEXnTWstvIJUDGSKSIMCSrfiAHWmfBtEjx0PPY/wDRXfPAU0c3hTQGRWAS2ER34yWjYxsRjtkHFfn8DapYSErhucqeAPWu/wDgGFoPCmhIyupMDSYk/F+8dpB2HHPHt+ZISLTSlKGpF6/qI0nR9T1DaGe3hPkoejzuRHEp9ixGfauCxa/eo00UircL5rOPOLJKpYlmXK++TjBrufiSyt9Q0+O1uWZbZ7uAzlG2kKuWHzducfl71x/U/B2yM39nqNvLazKtxuvgIdqTRG6GJ48ofl5/CvWoLlXJbLDq087a3uqfcl/A9xJrPiOOOeGL4S0sp7sxAFl87eiRszN1I5IrsY4rnH7NNCudPTU7+4RA9y0cUBRtyNbxglXRsDhiWI9gD3rpFb11wrjtgsIjutnbLdY8sVEanBdeelzHE0qxxEYUbsEZ4ZQQ2DnqPTpUvStpRUlhkSeHkpyTCZRbkkyM+NSlI2RrIyLIYRIcLlhgDB4UdjwPtJmuJFWxaOSR90duqnMcaKdrXEwXtkYQd8ehJFraKJ1ZXRGVvxK6hlP1B4rxYokLMkaKzY3FVAJwMDJFc39NHPJOr37Gvp9jHYWyQK7SNlpJZHxmSRzuZsDjrW5SldSWOyIG23lilKVkwKUpQClKUApSlAfLqro6MAVYFWB6EHsa5/8AHvpl1d6TqcgiuI/imspJ8CHULSOB5IpFZxs3LyJBnqAej10Kte6srC+j8m9tbe5iyDsuYklXPqA4IqOytTWGSVzcHk5H4m0qPU7jSNN0uytF1K/+FkunggiR4rfyBI8srRAAKSwP+rAAz0PWdOs4tPsbKyiGI7aCKFAecKihAM/QCvq1sNPsl22lrbwLxxDGqDgYH4R26CtmswjsjtFk97zgUpStyM+WVHBVlVlPBDDIP1BqFl8KeFJrkXcmk2bT7xJkp8pcfxFPwZ98VOUoD4RI41CIoVR0Ar7pSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoD/9k="
            title="Siddhant" />
        </div>
    )
}

export default StoryReel;
