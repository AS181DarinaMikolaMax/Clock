
./run_backend.sh &
P1=$!
./run_frontend.sh &
P2=$!
wait $P1 $P2



