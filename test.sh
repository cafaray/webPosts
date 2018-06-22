curl -X GET \
  http://localhost:3000/posts \

curl -X POST \
  http://localhost:3000/posts \
  -H 'content-type: application/json' \
  -d '{
        "name": "If you are a code, come and get into the mood on codefights",
        "url": "https://codefights.com/",
        "text": "Be part of the coder'\''s biggest network in the world and demostrate you real arts and skills to code.",
        "comments": [
            {
                "text": "don'\''t play with my skills pinky-coder !"
            }
        ]
    }'

curl -X PUT \
  http://localhost:3000/posts/1 \
  -H 'content-type: application/json' \
  -d '{
        "name": "If you are a code, come and get into the mood fighting !",
        "url": "https://codefights.com/",
        "text": "Be part of the coder'\''s biggest network in the world and demostrate you really arts and skills to code.",
        "comments": [
            {
                "text": "don'\''t play with my skills pinky-coder !"
            }
        ]
    }'

curl -X DELETE \
  http://localhost:3000/posts/0 \

curl -X GET \
  http://localhost:3000/posts/1/comments \

curl -X POST \
  http://localhost:3000/posts/1/comments \
  -H 'content-type: application/json' \
  -d '{
    "text": "2 an array iteration to test skills"
}'

curl -X PUT \
  http://localhost:3000/posts/1/comments/3 \
  -H 'content-type: application/json' \
  -d '{
    "text": "4-a an array iteration to test skills"
}'

curl -X DELETE \
  http://localhost:3000/posts/1/comments/0 \