package com.bookingmx.reservations;

import com.bookingmx.reservations.exceptions.ReservationException;
import java.util.HashMap;
import java.util.Map;

/**
 * The class provides core business logic for handling hotel reservations.
 * 
 * It supports basic operations to create, edit, cancel, and query reservations.
 * Validations are included to handle duplicate IDs or missing data to ensure data integrity.
 * 
 *
 * @author Jesús
 * @version 1.1
 * @since 2025-11
 */
public class ReservationService {

    /** 
     * Stores reservation data where the key is an integer ID and the value is the customer's name.
     */
    private Map<Integer, String> reservations = new HashMap<>();

    /**
     * Creates a new reservation.
     *
     * @param id The unique reservation ID.
     * @param customer The name of the customer for this reservation.
     * @return {@code true} if the reservation was successfully created.
     * @throws ReservationException if the ID already exists or if customer information is invalid.
     */
    public boolean createReservation(int id, String customer) throws ReservationException {
        if (reservations.containsKey(id)) {
            throw new ReservationException("Reservation ID already exists");
        }
        if (customer == null || customer.isBlank()) {
            throw new ReservationException("Customer name cannot be empty");
        }
        reservations.put(id, customer);
        return true;
    }

    /**
     * Edits an existing reservation.
     *
     * @param id The reservation ID to modify.
     * @param newCustomer The new customer name.
     * @return {@code true} if the reservation was updated successfully.
     * @throws ReservationException if the specified ID is not found.
     */
    public boolean editReservation(int id, String newCustomer) throws ReservationException {
        if (!reservations.containsKey(id)) {
            throw new ReservationException("Reservation not found");
        }
        reservations.put(id, newCustomer);
        return true;
    }

    /**
     * Cancels an existing reservation by removing it from the data store.
     *
     * @param id The ID of the reservation to cancel.
     * @return {@code true} if the reservation was successfully removed.
     * @throws ReservationException if the reservation does not exist.
     */
    public boolean cancelReservation(int id) throws ReservationException {
        if (!reservations.containsKey(id)) {
            throw new ReservationException("Reservation not found");
        }
        reservations.remove(id);
        return true;
    }

    /**
     * Retrieves the customer name for a specific reservation ID.
     *
     * @param id The ID of the reservation to retrieve.
     * @return The customer's name if found, otherwise {@code null}.
     */
    public String getReservation(int id) {
        return reservations.get(id);
    }
}