package com.bookingmx.reservations;

import com.bookingmx.reservations.exceptions.ReservationException;
import java.util.HashMap;
import java.util.Map;

public class ReservationService {
    private Map<Integer, String> reservations = new HashMap<>();

    /**
     * Creates a new reservation with a given ID and customer name.
     * @param id reservation ID
     * @param customer customer name
     * @return true if the reservation was created successfully
     * @throws ReservationException if the ID already exists or the customer name is invalid
     */
    public boolean createReservation(int id, String customer) throws ReservationException {
        if (reservations.containsKey(id)) {
            throw new ReservationException("Reservation ID already exists.");
        }
        if (customer == null || customer.isBlank()) {
            throw new ReservationException("Customer name cannot be empty or null.");
        }
        reservations.put(id, customer);
        return true;
    }

    /**
     * Edits an existing reservation.
     * @param id reservation ID
     * @param newCustomer new customer name
     * @return true if the edit was successful
     * @throws ReservationException if the reservation is not found
     */
    public boolean editReservation(int id, String newCustomer) throws ReservationException {
        if (!reservations.containsKey(id)) {
            throw new ReservationException("Reservation not found.");
        }
        reservations.put(id, newCustomer);
        return true;
    }

    /**
     * Cancels an existing reservation.
     * @param id reservation ID
     * @return true if the cancellation was successful
     * @throws ReservationException if the reservation is not found
     */
    public boolean cancelReservation(int id) throws ReservationException {
        if (!reservations.containsKey(id)) {
            throw new ReservationException("Reservation not found.");
        }
        reservations.remove(id);
        return true;
    }

    /**
     * Retrieves a reservation by ID.
     * @param id reservation ID
     * @return the customer name if found; null otherwise
     */
    public String getReservation(int id) {
        return reservations.get(id);
    }
}