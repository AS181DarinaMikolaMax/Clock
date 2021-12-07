
cd backend/auth && mvn spring-boot:run &
P1=$!
cd backend/crud && mvn spring-boot:run &
P2=$!
cd backend/gateway && mvn spring-boot:run &
P2=$!
wait $P1 $P2




