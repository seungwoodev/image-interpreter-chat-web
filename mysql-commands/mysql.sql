CREATE TABLE user_info (
user_id varchar(30) NOT NULL,
user_pw varchar(30) NOT NULL,
PRIMARY KEY (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE file (
user_id varchar(30) NOT NULL,
fileName varchar(30) NOT NULL,
fileURL varchar(200) NOT NULL,
fileType varchar(30) NOT NULL,
PRIMARY KEY (user_id, fileName, fileType)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE emoji (
user_id varchar(30) NOT NULL,
emotion_joy varchar(30) NOT NULL,
emotion_anger varchar(30) NOT NULL,
emotion_sorrow varchar(30) NOT NULL,
emotion_surprise varchar(30) NOT NULL,
emojiURL varchar(200) NOT NULL,
PRIMARY KEY (user_id, emojiURL)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;}